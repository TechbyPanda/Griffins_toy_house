const pool = require('./dbconfig.js');
module.exports = class User{
    constructor(name, mobile, email, commentbox) {
        this.name = name;
        this.mobile = mobile;
        this.email = email;
        this.commentbox = commentbox;

    }
    save() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) reject(err);
                else {
                    let sql = "insert into comment(name,mobile,email,commentbox) values(?,?,?,?)";

                    con.query(sql, [this.name, this.mobile, this.email, this.commentbox], (err, result) => {

                        con.release();
                        if (err)
                            reject(err);
                        else
                            resolve(result);
                    });
                }
            });
        });
    }
}
