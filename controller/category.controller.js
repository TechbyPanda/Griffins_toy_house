const Category = require('../model/category.model');
const Product = require('../model/product.model');
exports.addCategory = (request,response) => {
  console.log(request.file);
  console.log(request.body);
    let categoryName = request.body.category_name;
   
    let categoryImage = request.file.filename;
   
    const category = new Category(categoryName,categoryImage);
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