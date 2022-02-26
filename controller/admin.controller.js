const Admin = require('../model/admin.model');
const Category= require('../model/category.model');
exports.loginPost = (request, response) => {
    let email = request.body.email;
    console.log(email);
    let password = request.body.password;
    const admin = new Admin(email, password);
    admin.checkAdmin()
        .then(result => {
            request.session.current_user = email;
            Category.fetchCategory()
            .then(results => {
                console.log(results);
                return response.render('admin/admin.Dashboard.ejs'
                    //    title : "Admin Dashboard"
                    );
    
            })
            .catch(err => {
                console.log(err);
                return response.send("Error.....");
            });
        })
        .catch(err => {
            response.redirect("admin/");
        });
}
exports.adminDashBoard = (request, response, next) => {
    Category.fetchCategory()
        .then(results => {
            console.log(results);
            return response.render('admin/admin.Dashboard.ejs'
                //    title : "Admin Dashboard"
                            );

        })
        .catch(err => {
            console.log(err);
            return response.send("Error.....");
        });
}
exports.customerList = (request, response, next) => {
    response.render("admin/customer.ejs");
}
