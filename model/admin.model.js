const pool = require('../util/database.js');
module.exports = class Admin{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    checkAdmin(){
        return new Promise((resolve,reject) => {
            pool.getConnection((err,con)=>{
          if(err) reject(err);
          else{
              let sql = "select * from login where email=? and password=?";
              con.query(sql,[this.email,this.password], (err,result)=>{
                  if(err) reject(err);
                  else
                  {
                      if(result.length>0)
                      resolve(result);
                      else
                      reject(err);
                  }
                  con.release();
              });
          }
            });
        })
    }
}