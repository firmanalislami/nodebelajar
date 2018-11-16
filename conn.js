const mysql = require('mysql2');
const con = mysql.createConnection({
    host: "localhost",
  port:8889,
    user: "root",
    password: "root",
    database: "nodebelajar"
});

con.connect(function (err){
    if(err)
    console.log(err)
    
});
module.exports = con;