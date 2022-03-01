const mysql = require("mysql")

//koneksi
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "computer_store"
})

module.exports  = db