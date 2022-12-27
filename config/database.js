//import package mysql
const mysql = require('mysql');


//import dotenv
require('dotenv').config();

//create connection
const connect = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
})

connect.connect(function(err){
    if(err){
        console.log(`connection error ${er}`);
        return;
    } else{
        console.log('connection is already');
        return;
    }
})

module.exports = connect;