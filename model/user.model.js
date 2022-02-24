const pool = require('../util/database.js');
module.exports = class User {
    constructor(name, mobile, email, password) {
        this.name = name;
        this.mobile = mobile;
        this.email = email;
        this.password = password;
    
    }
    customerList(){
        return new Promise((resolve, reject) => {
            pool.getConnection((err,con)=>{
                if(err) reject(err);
                else{
                    let sql = "select * from register";
                 con.query(sql,(err,results)=>{
                    if(err) reject(err);
                    else resolve(results);
                 });

                }
            });
        });
    }
    save() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                else {
                    let sql = "insert into register(name,mobile,email,password) values(?,?,?,?)";
                    con.query(sql, [this.name, this.mobile, this.email, this.password], (err, result) => {
                        if (err) reject(err);
                        else
                            resolve(result);
                    });
                }
            });
        });
    }
}