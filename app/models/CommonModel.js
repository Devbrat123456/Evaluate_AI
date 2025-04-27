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
                return result.recordset; 

    }
    async findAll() {
        return new Promise(async (resolve, reject) => {
            try {
                const request = pool().request();

                // Make sure this.#privateTableName is safe (no user input to avoid SQL Injection!)
                const result = await request.query(`SELECT * FROM ${this.#privateTableName}`);

                resolve(result.recordset);
            } catch (error) {
                reject(error);
            }
        });


    }
    async create(data) {
        // Generate placeholders for each column, like `?, ?, ?`

         const columns = Object.keys(data);
    const values = Object.values(data);

    const columnList = columns.join(', ');
    const paramList = columns.map((col, i) => `@param${i}`).join(', ');

    const query = `INSERT INTO ${this.#privateTableName} (${columnList}) VALUES (${paramList})`;

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
    }

    async edit(data) {

    }
    async update(data, condition) {

        const keys = Object.keys(data);
        const values = Object.values(data);
        const setClause = keys.map((key, index) => `${key} = @param${index}`).join(', ');
        const query = `UPDATE ${this.#privateTableName} SET ${setClause} WHERE ${condition}`;

        const transaction = new sql.Transaction();
        try {
            await transaction.begin();

            const request = new sql.Request(transaction);

            keys.forEach((key, index) => {
                request.input(`param${index}`, values[index]);
            });

            const result = await request.query(query);

            await transaction.commit();
            return result.rowsAffected;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
    async updateOnMultipleCol(data,conditions)
    {

        const keys = Object.keys(data);
        const values = Object.values(data);
        const setClause = keys.map((key, index) => `${key} = @param${index}`).join(', ');
        const query = `UPDATE ${this.#privateTableName} SET ${setClause} `;

        if (conditions.length > 0) {
            conditions.forEach((condition, index) => {
                const paramName = `cond${index}`;
                whereClauses.push(`${condition.column} = @${paramName}`);
                request.input(paramName, condition.value);
            });
            query += ` WHERE ` + whereClauses.join(" AND ");
        }
        console.log(query);


        const transaction = new sql.Transaction();
        try {
            await transaction.begin();

            const request = new sql.Request(transaction);

            keys.forEach((key, index) => {
                request.input(`param${index}`, values[index]);
            });

            const result = await request.query(query);

            await transaction.commit();
            return result.rowsAffected;
        } catch (error) {
            await transaction.rollback();
            throw error;
        } 
    }
    async delete(idObj) {

        const [col] = Object.keys(idObj);
        const colValue = idObj?.[col];
        
        const query = `DELETE FROM ${this.#privateTableName} WHERE ${col} = @value`;

        const transaction = new sql.Transaction();

        try {
            await transaction.begin();

            const request = new sql.Request(transaction);
            request.input('value', colValue);

            const result = await request.query(query);

            await transaction.commit();
            return result.rowsAffected;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }

    }

    async buildDynamicQueryJoin(tables, columns, joins, conditions = [],groupBy=[],orderBy=[]) {

         let sqlQuery = "SELECT ";
    sqlQuery += columns.join(", "); // Directly join column names

    sqlQuery += ` FROM ${tables[0]} `;

    joins.forEach(join => {
        sqlQuery += ` ${join.type} JOIN ${join.table} ON ${join.on} `;
    });

    let whereClauses = [];
    let groupClauses = [];
    let orderClauses = [];
    let request = new sql.Request();

    // Handling WHERE conditions
    if (conditions.length > 0) {
        conditions.forEach((condition, index) => {
            const paramName = `cond${index}`;
            whereClauses.push(`${condition.column} = @${paramName}`);
            request.input(paramName, condition.value);
        });
        sqlQuery += ` WHERE ` + whereClauses.join(" AND ");
    }

    // Handling GROUP BY
    if (groupBy.length > 0) {
        sqlQuery += ` GROUP BY ` + groupBy.join(", ");
    }

    // Handling ORDER BY
    if (orderBy.length > 0) {
        sqlQuery += ` ORDER BY ` + orderBy.join(", ");
    }

    try {
        const transaction = new sql.Transaction();

        await transaction.begin();

        const result = await request.query(sqlQuery);

        await transaction.commit();
        return result.recordset;
    } catch (error) {
        console.error("Transaction failed:", error);
        throw error;
    }


        // console.log(sql, params);  

    }




}
module.exports = CommonModel;