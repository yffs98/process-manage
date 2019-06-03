const mysql = require('mysql')

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1314',
    database : 'project_process',
})

connection.connect()

module.exports = connection
