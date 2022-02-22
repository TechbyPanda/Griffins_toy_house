
// const pool = require('./dbconfig.js');
// module.exports = class Admin{
//     constructor(email,password){
//         this.email = email;
//         this.password = password;
//     }
//     checkAdmin(){
//       return new Promise((resolve,reject)=>{
//           pool.getConnection((err,con)=>{
//               if(err)
//                 reject(err);
//               else{
//                   let sql = "select * from admin where email=? and password=?";
//                   con.query(sql,[this.email,this.password],(err,result)=>{
//                      con.release();
//                      err ? reject(err) : resolve(result);                
//                   });
//               }  
//           });
//       });
//     }
// }