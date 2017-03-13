var jwt = require('jwt-simple');
var User = require('./userModule.js');
var Q = require('q');
var nodemailer = require('nodemailer')
var Company = require('../Company/companyModule.js')
// // Promisify a few mongoose methods with the `q` promise library
// var findUser = Q.nbind(User.findOne, User);
// var createUser = Q.nbind(User.create, User);


module.exports.handleUsers = {
  signin : function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username})
      .then(function (user) {
        if (!user) {
          res.status(404).json("user not found")
        } else {
          user.comparePasswords(password)
            .then(function (isMatch) {
              if (isMatch) {
                var token = jwt.encode(user, 'secret');
                res.json({token : token, user : user});
              } else {
                res.json("password not matched")
              }
            });
        }
      });
  },

  // add user to data base
  signup: function(req, res) {
    console.log("in sign up",req.body.code)
    
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var code = req.body.code;



    // check to see if user already exists
    User.findOne({username: username})
      .exec(function (err, user) {
        if (user) {
          res.json('User already exist!');
        } else {
          // make a new user if not one
          return User.create({
            username: username,
            password: password,
            email:email,
            code:code
          }, function (err, newUser) {
              // create token to send back for auth
              if(err){
                res.json(err);
              } else {
                var token = jwt.encode(user, 'secret');

                var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                user: 'berzerkk2017@gmail.com', 
                pass: 'berzerkk' 
                    }
                });

                var mailOptions = {
                  from: 'berzerkk2017@gmail.com',
                  to: req.body.email,
                  subject: 'Email Example',
                  text: "Hello World!"
                };

                transporter.sendMail(mailOptions, function(error, info){
                  if(error){
                      console.log(error);
                  }else{
                      console.log('Message sent: ' + info.response);
                  };
                });
                res.json({token:token,newUser}); 
              }     
          });
        }
      });
  },

  // get user in data base
  getUsers: function(req, res) {
    User.find({}, function(err, users){
      if(err){
        res.json(err);
      } else {
        res.json(users);
      }
    });
  }

}