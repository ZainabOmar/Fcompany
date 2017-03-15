var Task = require('./taskModule.js');
var User = require('../Users/userModule.js')

module.exports.handleTask = {
  // get task from data base
  getTask: function(req, res)  {
  	Task.find(function(err, Tasks)  {
  		if(err){
  			throw err;
  		}else{
  			res.json(Tasks)
  		};
  	});
  },

  // add task to data base
  addTask: function(req, res)  {
  	var task = req.body;
  	// console.log(task)

  	User.findOne({username: task.assignTo})
  	.then(function(user) {
  		if (!user) {
  			res.status(500).send("user not found")
  		}else {
  			Task.create(task, function(err, newTask){
  				if(err){
  					res.status(500).send("something went wrong");
  				}else{
  					newTask.users.push(user)
  					newTask.save(function(err, result) {
  						// console.log(result)
  						if (err) {
  							res.status(500).send("something went wrong");
  						}else {
  							res.json(result)
  						}
  					})
  				};
  			})
  		}
  	})
  }
}