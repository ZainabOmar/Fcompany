var jwt = require('jwt-simple');
var User = require('./userModule.js');
var Q = require('q');
var nodemailer = require('nodemailer')

var Company = require('../Company/companyModule.js')

GenerateCode = function () {
    var Code="";
    for(var i=0; Code.length <20 ; i++){
      var rand3=Math.floor( Math.random() * (100- 0) +0);
      var rand=Math.floor( Math.random() * (2000- 1000) +100);
      var rand2=Math.floor( Math.random() * (200 - 100) +100);
      Code+=String.fromCharCode(rand)+String.fromCharCode(rand2)+rand3;
    }
    return Code.replace(" ", "");
  }

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
    // console.log(this)
    // if(req.body)
    if(req.body.UserType === "Admin"){

      var username = req.body.username;
      var password = req.body.password;
      var email = req.body.email;
      var code = GenerateCode();
      var job =req.body.job;

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
            job:job,
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
                  text: code
                };

                transporter.sendMail(mailOptions, function(error, info){
                  if(error){
                    console.log(error);
                  }else{
                    console.log('Message sent: ' + info.response);
                  };
                });

                res.json({token : token ,AdminId : newUser._id , username : username}); 
              }     
            });
        }
      });


  } else if( req.body.UserType === "employee"){
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
          Company.findOne({code:code})
          .exec(function(err,c){
            if(err) throw err;
            if(c){
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
                console.log(c)
                res.json({token : token ,UserId : newUser._id , username : username}); 
              c.users.push(newUser._id)
              c.save(function(err,c){
                if(err) {throw err};
                res.json(newUser)
              })
              }   
            });
                console.log("aaaaa")
            } else {
              res.status(404).json("egleb wjhak");
            }
          }) 
        }
      });

  }



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