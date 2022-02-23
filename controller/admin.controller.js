 const Admin = require('../model/admin.model');
exports.adminLoginPage = (request,response,next)=>{
    response.render("admin/admin_login.ejs");
};
exports.adminLoginPost = (request,response,next)=>{
    const email = request.body.email;
    const password = request.body.password;
    let admin = new Admin(email,password);
       console.log(email)
    admin.checkAdmin().then(results=>{
        response.send("succes");
      if(results.length>0){
       response.render("admin/admin_succes.ejs"); 
      }
       else
       console.log("Login Failed...");  
    }).catch(err=>{
        console.log(err);
    });
 };