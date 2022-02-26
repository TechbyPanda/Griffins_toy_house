const User = require('../model/user.model');
const bcrypt = require('bcryptjs');
exports.registerPage = (request, response) => {
  const name = request.body.name;

  const mobile = request.body.mobile;
  const email = request.body.email;
  const password = request.body.password;

  const hashedPassword = "";

  // Encryption of the string password
  bcrypt.genSalt(10, (err, Salt) => {

    // The bcrypt is used for encrypting password.
    bcrypt.hash(password, Salt, (err, hash) => {

      if (err) {
        return console.log('Cannot encrypt');
      }
      else {
        console.log(hash);

        const user = new User(email, hash,name, mobile);
        user.save()
          .then(result => {

            response.redirect("/");
          })
          .catch(err => {
            response.send("not success");
          });
      }

    });
  });
}
exports.loginPost = (request, response) => {
  let email = request.body.email;
  console.log(request.body);
  console.log(email);
  let password = request.body.password;
  const user = new User(email, password);
  user.checkUser()
    .then(results => {
      request.session.current_user_id = results[0].id;
      console.log(request.session.current_user_id);
      response.redirect("/");
    })
    .catch(err => {
      response.send("incorrect password");
    })

}
exports.forgotPassword = (request, response) => {
  response.send("hellllo its is forget pass");
}
exports.loginPage = (request, response, next) => {
  response.render("./user/login.ejs",{
    isLoggedIn:request.session.current_user_id
  });
}
exports.logout = (request, response, next) => {
     request.session.current_user_id = null;
    request.session.destroy();
    response.redirect("/");

}