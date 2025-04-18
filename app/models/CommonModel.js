// const dbConnection = require('../../config/db');
const {sql,pool}= require('../../config/db');

class CommonModel {
    #privateTableName;

    constructor(tableName) {
        this.#privateTableName = tableName;
    }
    async findOne(data) {
                const [col] = Object.keys(data);
                const colvalue = data[col];

                const request = pool().request();
                request.input('val', sql.VarChar, colvalue);

                const result = await request.query(`SELECT * FROM ${this.#privateTableName} WHERE ${col} = @val`);
                 console.log(result);
                return result.recordset; 

        // const [col] = Object.keys(data);
        // const colvalue = data?.[col];


        // return new Promise((resolve, reject) => {
        //     dbConnection.query(`select * from  ${this.#privateTableName}  where ${col} = '${colvalue}'`, [], (error, result) => {
        //         if (!error) {
        //             resolve(result);
        //         } else {
        //             reject(error);
        //         }
        //     })
        // })
    }
    async findAll() {
        return new Promise((resolve, reject) => {
            dbConnection.query(`select * from ${this.#privateTableName}`, [], (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            });
        })
    }
    async create(data) {
        // Generate placeholders for each column, like `?, ?, ?`

         const columns = Object.keys(data);
    const values = Object.values(data);

    const columnList = columns.join(', ');
    const paramList = columns.map((col, i) => `@param${i}`).join(', ');

    const query = `INSERT INTO ${tableName} (${columnList}) VALUES (${paramList})`;

    const transaction = new sql.Transaction(pool());

    try {
        await transaction.begin();

        const request = transaction.request();
        values.forEach((val, i) => {
            request.input(`param${i}`, val); // you can explicitly type it like sql.VarChar if needed
        });
        const result = await request.query(query);

        await transaction.commit();

        return result;
    } catch (err) {
        await transaction.rollback();
        throw err;
    }
        // const columns = Object.keys(data).join(", ");
        // const placeholders = Object.keys(data).map(() => '?').join(", ");
        // const values = Object.values(data);

        // const query = `INSERT INTO ${this.#privateTableName}(${columns}) VALUES(${placeholders})`;
        // try {
        //     await dbConnection.beginTransaction();
        //     const result = new Promise((resolve, reject) => {
        //         dbConnection.query(query, values, (error, result) => {
        //             if (error) return reject(error);
        //             resolve(result);
        //         });
        //     });

        //     await dbConnection.commit(); // Commit the transaction if everything goes well
        //     return result;
        // } catch (error) {
        //     await dbConnection.rollback();
        //     throw error;
        // }
    }

    async edit(data) {

    }
    async update(data, condition) {

        const keys = Object.keys(data);
        const values = Object.values(data);
        const setClause = keys.map((key, index) => `${key} = ? `).join(', ');
        const query = `UPDATE ${this.#privateTableName} SET ${setClause} WHERE ${condition}`;
        console.log(query);

        try {
            await dbConnection.beginTransaction();
            const result = new Promise((resolve, reject) => {
                dbConnection.query(query, values, (error, result) => {
                    if (error) {
                        reject(error); // Reject the promise if there’s an error
                    } else {
                        resolve(result); // Resolve the promise with the result of the insert operation
                    }
                });
            });

            await dbConnection.commit(); // Commit the transaction if everything goes well
            return result;
        } catch (error) {
            await dbConnection.rollback();
            throw error;
        }
    }
    async delete(idObj) {
        const [col] = Object.keys(idObj);
        const colvalue = idObj?.[col];
        const query = `delete from ${this.#privateTableName} where ${col} = ${colvalue} `;

        try {
            await dbConnection.beginTransaction();
            const result = new Promise((resolve, reject) => {
                dbConnection.query(query, [], (error, result) => {
                    if (error) return reject(error);
                    resolve(result);
                });
            });

            await dbConnection.commit(); // Commit the transaction if everything goes well
            return result;
        } catch (error) {
            await dbConnection.rollback();
            throw error;
        }
    }

    async buildDynamicQueryJoin(tables, columns, joins, conditions = [],groupBy=[],orderBy=[]) {
        let sql = "SELECT ";
        sql += columns.map(() => "??").join(", "); // Use placeholders for column names

        let params = [];
        sql += ` FROM ?? `; // Placeholder for the main table name

        columns.forEach(col => {
            params.push(col);
        });

        params.push(tables[0]);
        joins.forEach(join => {
            sql += ` ${join.type} JOIN ?? ON ${join.on} `;
            params.push(join.table);
        });

        if (conditions.length > 0) {
            sql += ` WHERE ` + conditions.map(() => "?? = ?").join(" AND ");
            conditions.forEach(condition => {
                params.push(condition.column, condition.value);
            });
        }
        if (groupBy.length > 0) {
            sql += ` GROUP BY ` + conditions.map(() => "?? = ?").join(",");
            groupBy.forEach(condition => {
                params.push(condition);
            });
        }
         if (orderBy.length > 0) {
            sql += ` ORDER BY ` + conditions.map(() => "?? = ?").join(",");
            orderBy.forEach(condition => {
                params.push(condition);
            });
        }
        try {
            await dbConnection.beginTransaction();
            const result = new Promise((resolve, reject) => {
                dbConnection.query(sql, params, (error, result) => {
                    if (error) return reject(error);
                    resolve(result);
                });
            });

            await dbConnection.commit(); // Commit the transaction if everything goes well
            return result;
        } catch (error) {
            await dbConnection.rollback();
            throw error;
        }


        // console.log(sql, params);  

    }




}
module.exports = CommonModel;