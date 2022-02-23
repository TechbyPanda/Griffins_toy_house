const pool = require('./dbconfig.js');
module.exports = class Query{
    constructor(query_box) {
        this.query_box = query_box;
        
    }
    save() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) reject(err);
                else {
                    let sql = "insert into query(query_box) values(?)";

                    con.query(sql, [this.query_box], (err, result) => {

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
