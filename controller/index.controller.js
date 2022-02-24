const User = require('../model/user.model');
exports.registerPage = (request,response)=>{
   let name = request.body.name;
   console.log(name);
   let mobile = request.body.mobile;
   let email = request.body.email;
    // const register = async function(req,res){    
    const password = req.body.password;    
    //  const encryptedPassword = await bcrypt.hash(password, 10,(err,data)=>{
    //      if(err) response.send("error");
    //     else{
    //      console.log("confirm");
    //     }
    // // });

   const user=new User(name,mobile,email,password);
   user.save()
   .then(result=>{
       response.send("confirm");
   })
   .catch(err=>{
     response.send("not success");
   });
}

// exports.customerPage = (request, response) => {
//     const user = new User();
//     user.customerList()
//     .then(results=>{
//         response.render("./admin/index.ejs",{
//             customerList: results
//         });
//     })
//     .catch(err=>{
//         response.send("error!");
//     });
// }