const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
require("dotenv").config();

// Connect Node.js with MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'newsql',
    password: process.env.DB_PASSWORD
});

let getRandomdata = () => {

    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
    ];

};

let q = "INSERT INTO data (id, username, email) VALUES ?";
let data = [];

for (let i = 1; i <= 50; i++) {
    data.push(getRandomdata());
}

connection.query(q, [data], (err, result) => {

    if (err) {
        console.log("❌ INSERT ERROR:");
        console.log("Error Code:", err.code);
        console.log("Error Message:", err.sqlMessage);
        console.log("SQL:", err.sql);

        connection.end();
        return;
    }

    console.log("✅ Data inserted successfully!");
    console.log("Affected Rows:", result.affectedRows);

    connection.end();
});