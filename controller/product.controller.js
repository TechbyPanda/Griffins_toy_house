const Category=require('../model/category.model');
const path = require('path');
const Product=require('../model/product.model');
exports.productListPage=(request, response,next) => {
  Product.fetchProduct()
  .then(results=>{
    response.render('./admin/productList.ejs',{
      productList:results
    });
  })
  .catch(err => {
    console.log(err);
    response.send("error");
  })
 
}
exports.addProductPage = (request,response,next)=>{
  Category.fetchCategory()
  .then(results=>{
    console.log(results);
    response.render("./admin/addProduct.ejs",{
      categoryList:results
    });
  })
  .catch(err=>{
    console.log(err);
    response.send("error found")
  });
}
exports.addProductPost=(request, response,next)=>{
  let productName = request.body.productName;
  console.log(request.body);
  console.log(request.files);
  console.log(request.files);
  let categoryName = request.body.categoryName;
  let productPrice = request.body.productPrice;
  let productQuantity = request.body.productQuantity;
  let productDescription = request.body.productDescription;
  let frontViewImage = "";
  let backViewImage = "";
  let leftViewImage = "";
  let rightViewImage = "";
  let productAddDate = "";
  if(request.files.length>0){
    frontViewImage = request.files[0].filename;
     if(request.files.length>1){
         backViewImage = request.files[1].filename;
         if(request.files.length>2){
             leftViewImage = request.files[2].filename;
             if(request.files.length>3){
               rightViewImage = request.files[3].filename;
             }
         }
     }
  }
  const product = new Product(productName,categoryName,productPrice
    ,productQuantity,frontViewImage,backViewImage,leftViewImage,rightViewImage,productDescription,productAddDate);
    console.log("before save");
    product.save()
    .then(results=>{
      response.send("<h1>success</h1>");
    })
    .catch(err => {
      response.send("<h1>error</h1>");
    })
}

// exports.getProductById = (request,response,next)=>{
//   console.log("getproductbyid");
//   console.log(request.params.productId);
//   Product.fetchProductById(request.params.productId)
//   .then(result=>{
//     if(result.length>0){
//       // response.send("<h1>success</h1>");
//       console.log(result);
//        response.render('./admin/editProduct.ejs',{
//           product: result[0]
//        });
//     }
//   })
//   .catch(err=>{
//      console.log(err);
//   });
// };
// exports.updateProduct =  (request,response)=>{
//   let p = new Product();
//   p.id = request.body.id;
//   p.name = request.body.name;
//   p.price = request.body.price;
//   p.imageUrl = request.body.imageUrl;
//   p.description = request.body.description;
//   p.update().then(result=>{
//      response.redirect("/user/product-list");
//   }).catch(err=>{
//      console.log(err);
//      response.send("Error.....");
//   });
// };
// exports.deleteProduct = (request,response,next)=>{
//   const id = request.params.id;
//   Product.delete(id).then(
//       ()=>{
//           //response.redirect("/user/product-list");
//         response.send("Product Deleted...");
//       }
//   ).catch();
// };

