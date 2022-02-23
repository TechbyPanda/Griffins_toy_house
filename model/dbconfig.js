const mysql =require('mysql');
const pool = mysql.createPool({
    connectionLimit : 100,
    host : 'localhost',
    user : 'root',
   password : 'root',
   database : 'toyHouse',
});

module.exports = pool;