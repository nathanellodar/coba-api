const mysql = require('mysql')

const dataBase = mysql.createConnection({
    host: "localhost",
    usename: "root",
    password: "",
    database: "capstone"
})

module.exports = dataBase