
const pool = require('./dbconfig.js');
module.exports = class Admin{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    checkAdmin(){
      return new Promise((resolve,reject)=>{
          console.log("checkADmin")
          pool.getConnection((err,con)=>{
              console.log("conection")
              if(err)
                reject(err);
              else{
                  console.log("conection found");
                  let sql = "select * from login where email=? and password=?";
                  con.query(sql,[this.email,this.password],(err,result)=>{
                     con.release();
                     err ? reject(err) : resolve(result);                
                  });
              }  
        
          });
      });
    }
}