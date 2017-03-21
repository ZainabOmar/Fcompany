var Task = require('./taskModule.js');
var User = require('../Users/userModule.js');
var Company = require('../Company/companyModule.js');

module.exports.handleTask = {
  getTaskSameCompany: function(req, res)  {
    var param = req.params
    User.findOne({_id: param.userId})
    .then(function(user) {
      if (!user) {
       res.status(500).send("user not found")
     }else {
       Task.find({codeComp: user.code}, function(err, Tasks)  {
        if(err){
         throw err;
       }else{
         res.json(Tasks)
       };
     });
     }
   })
  },


  // add task to data base
  addTask: function(req, res)  {
    console.log(req.body)
     task = {
        taskName: req.body.newTodo,
        completed: false,
        description : req.body.Discription,
        updated : req.body.Date,
        assignTo : req.body.Assign,
      }



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
          Task.create(task, function(err, newTask){
            console.log(newTask)
            if(err){
             res.status(500).send("something went wrong1");
           }else{
            newTask.codeComp.push(comp.code);
            newTask.save(function(err, result) {
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
  delete : function(req,res){
        User.findOne({_id: req.body.userId})
        .then(function(user) {
          if (!user) {
           res.status(500).send("user not found")
         }else {
       var query = {'taskName': req.body.newTodo,'codeComp':user.code};
        Task.remove(query, function (err) {
          console.log(err)
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