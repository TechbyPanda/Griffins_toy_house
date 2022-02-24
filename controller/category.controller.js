const Category = require('../model/category.model');
const Product = require('../model/product.model');
exports.addCategory = (request,response) => {
    let categoryName = request.body.category_name;
    const category = new Category(categoryName);
    category.save()
    .then(result => {
        response.send("<h1>successfully</h1>");
    })
    .catch(err => {
        response.send("error");
    });
  };
  exports.updateCategory = (request,response) => {
        
  }
exports.getCategoryList = (request, response,next)=>{

Category.fetchAllCategory()
.then(resultsCategory => {
        Product.fetchProduct()
  .then(results=>{
   
    
      response.render('./admin/categoryList.ejs',{categoryList: resultsCategory,
        productList:results 
    });
   
  })
  .catch(err => {
    console.log(err);
    response.send("error");
  });
        
    })
    .catch(err => {
        console.log(err);
        response.send("error found..");
    });
}