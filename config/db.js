// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE,
//     port: process.env.MYSQL_PORT,
// });

// connection.connect((err) => {
//     if (err) {
//         console.log("Database Connection Error: " + err);
//         // Optionally exit process if you want to halt app on DB error
//         process.exit(1);
//     } else {

//     }
// });

// module.exports = connection;

const sql = require('mssql');

const config = {
    user: process.env.MYSQL_USER_PRO,
    password: process.env.MYSQL_PASSWORD_PRO,
    server: process.env.MYSQL_HOST_PRO,  // e.g. 'localhost' or remote IP
    database: process.env.MYSQL_DATABASE_PRO,
    port: parseInt(process.env.MYSQL_PORT_PRO) || 1433,
    options: {
        encrypt: true,              // set true if you're using Azure
        trustServerCertificate: true // allow self-signed certs for dev
    }
};

let pool;

const connectToDatabase = async () => {
    try {
        pool = await sql.connect(config);
        console.log("✅ Connected to MSSQL Database");
    } catch (err) {
        console.error("❌ Database Connection Error:", err);
        process.exit(1); // exit if connection fails
    }
};

connectToDatabase();

module.exports = {
    sql,
    pool: () => pool
};
