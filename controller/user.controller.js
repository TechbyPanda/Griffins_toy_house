const User = require('../model/user.model');
exports.registerPage=(request, response)=>{
const name = request.body.name;

const mobile = request.body.mobile;
const email = request.body.email;
const password = request.body.password;    
 

const user=new User(name,mobile,email,password);
user.save()
.then(result=>{
  response.send("<h1>save data</h1>");
    // response.redirect("/admin/dashboard");
})
.catch(err=>{
  response.send("not success");
});
}

// exports.customerPage = (request, response) => {
//  const user = new User();
//  user.customerList()
//  .then(results=>{
//     response.render("<h1>Successfully</h1>")
//  })
//  .catch(err=>{
//      response.send("error!");
//  });
// }