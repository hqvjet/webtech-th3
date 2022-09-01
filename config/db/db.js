const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'th3'
})

module.exports = con

