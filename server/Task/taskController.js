var Task = require('./taskModule.js');
var User = require('../Users/userModule.js');
var Company = require('../Company/companyModule.js');

module.exports.handleTask = {
  getTaskSameCompany: function(req, res)  {
    var param = req.params
    Company.findOne({_id: param.compId})
    .then(function(comp) {
      if (!comp) {
       res.status(500).send("company not found")
     }else {
       Task.find(function(err, Tasks)  {
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
    var param = req.params;
    var task = req.body;

    Company.findOne({_id: param.compId})
    .then(function(comp) {
      if (!comp) {
       res.status(500).send("company not found")
     }else {
      Task.create(task, function(err, newTask){
        if(err){
         res.status(500).send("something went wrong");
       }else{
        newTask.company.push(comp);
        newTask.save(function(err, result) {
          if (err) {
           res.status(500).send("something went wrong");
         }else {
           res.json(result)
         }
       })
      }
    })
    }
  })
  }
}