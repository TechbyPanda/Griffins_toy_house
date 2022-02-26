const Product = require('../model/product.model');
exports.homePage=(request, response) => {
   currentUserId = request.session.current_user_id;
   console.log(currentUserId);
  Product.fetchAllProduct(currentUserId)
  .then(results=>{
     return  response.render("./index.ejs",{
      productList: results,
      isLoggedIn:request.session.current_user_id
      
    });
  })
  .catch(err=>{
    console.log(err);
    return response.send("something happend!..");
  });
 
};
