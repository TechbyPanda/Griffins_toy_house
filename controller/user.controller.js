const User = require('../model/user.model');
const Query = require('../model/query.model');


exports.contactusPage = (request,response)=>{
    response.render("user/user_contactus.ejs");
}
exports.queryPage = (request,response)=>{
    response.render("user/user_query.ejs");
}
exports.queryPost = (request,response)=>{
    const query_box = request.body.query_box;
    
    let query = new Query(query_box);
       console.log(query)
    query.save().then(results=>{
        response.send("succes");
      if(results.length>0){
        console.log("success");  
       response.send("success"); 
      }
       else
       console.log("success");  
    }).catch(err=>{
        console.log(err);
    });
};


exports.contactusPost = (request,response)=>{
    const name = request.body.name;
    const mobile = request.body.mobile;
    const email = request.body.email;
    const commentbox = request.body.commentbox;
    let user = new User(name,mobile,email,commentbox);
       console.log(user)
    user.save().then(results=>{
        response.send("succes");
      if(results.length>0){
       response.render("user/user_succes.ejs"); 
      }
       else
       console.log("Login success...");  
    }).catch(err=>{
        console.log(err);
    });
};