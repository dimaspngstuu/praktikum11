//import db
const db = require('../config/database');

class student {
    static all(){
        return new Promise((resolve,reject)=>{
            const sql = 'SELECT * FROM students';
            db.query(sql,(err,result)=>{
                resolve (result)
            })
        })
      
    }
}

//export this file
module.exports = student;