const pool = require("../util/database");

module.exports = class Category {
    constructor(categoryName) {
        this.categoryName = categoryName;
    }
    save() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                else {
                    let sql = "insert into categories(category_name) values(?)";
                    con.query(sql, [this.categoryName], (err, result) => {
                        if (err)
                            reject(err);
                        else
                            resolve(result);
                    });
                }
            });
        });
    }
    static fetchCategory() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (!err) {
                    let sql = "select * from categories";
                    con.query(sql, [this.categoryName], (err, results) => {
                        if (err) reject(err);
                        else resolve(results);
                    });
                }
                else
                    reject(err);
            });
        })
    }
    static fetchAllCategory() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (!err) {
                    let sql = " select categories.category_name,product.pname,product.product_price,product.product_stock,product.description,product.date from product inner join categories on categories.id=product.category_id;";
                    con.query(sql, (err, results) => {
                        if (err) reject(err);
                        else resolve(results);
                    });
                }
                else
                    reject(err);
            });
        })
    }
}