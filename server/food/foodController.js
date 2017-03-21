var Food = require('./foodModel.js');
var User = require('../Users/userModule.js');
var Company = require('../Company/companyModule.js');

module.exports.handlefood = {
  getfood: function(req, res)  {
    var query ={_id: req.params.userId}
    User.findOne(query).exec(function(err,user){
      // console.log(err)
      // console.log(user)
      if (!user) {
       res.status(500).send("user not found")
     }else {
       Food.find({codeComp: user.code}, function(err, foods)  {
        if(err){
         throw err;
       }else{
         res.json(foods)
       };
     });
     }
   })
  },
   

  add:function(req,res){
    // console.log("in add" , req.body)

    var food= {
      dishName : req.body.dishName,
      type : req.body.type,
      foodtime : req.body.foodTime
    };

      User.findOne({_id: req.body.userId})
      .then(function(user) {
        if (!user) {
         res.status(500).send("user not found")
       }else {
        var temp = user.code
        Company.findOne({code:temp})
        .exec(function(err, comp) {
          if(!comp){
            res.status(500).send("company not found");
          }else{
            Food.create(food, function(err, newfood){
              // console.log(newfood)
              if(err){
               res.status(500).send("something went wrong1");
             }else{
              newfood.codeComp.push(comp.code);
              newfood.save(function(err, result) {
                if (err) {
                 res.status(500).send("something went wrong2");
               }else {
                 res.json(result) 
               }
             })
            }
          })
          }
        })
      }
    })
    },

    vote : function(req,res){
     var query = {'dishName': req.body.dishName};
      Food.findOne(query)
      .exec(function(err,food){
        if(err){
          res.json(err)
        }
        else if (food){
          if(food.hasvoted.indexOf(req.body.userId)>-1){
            res.json('u voted befor')
          }else{
      var doc = { $inc: {votes:1},$push:{'hasvoted':req.body.userId}};
      Food.findOneAndUpdate(query,doc, { "new": true})
       .exec(function(err,data){

        if(err){
          res.json(err)
        }else {
          res.json(data)
        }
       }) 
          }
        }
      })
    },

    delete : function (req,res){
      User.findOne({_id: req.body.userId})
      .then(function(user) {
        if (!user) {
         res.status(500).send("user not found")
       }else {
     var query = {'dishName': req.body.dishName,'codeComp':user.code};
      Food.remove(query, function (err) {
        if (err){
          res.json(err)
        } else{
          res.json('removed')
        };
      });
    }

})
    }
}




