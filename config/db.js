const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
});

connection.connect((err) => {
    if (err) {
        console.log("Database Connection Error: " + err);
        // Optionally exit process if you want to halt app on DB error
        process.exit(1);
    } else {

    }
});

module.exports = connection;
