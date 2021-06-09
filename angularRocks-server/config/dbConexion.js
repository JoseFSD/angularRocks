require('dotenv').config()
const mysql = require('mysql');
const db = require('./devConfig')


const connection = mysql.createConnection(db.dbConfig);

connection.connect((err, connection) => {
    if (err) throw err
    console.log('Database MUSIC connected!')
})

module.exports = connection;