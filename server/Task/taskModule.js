var mongoose = require('mongoose');


var taskSchema = new mongoose.Schema({
	users:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:'user'
	}],
	taskName:{
		type:String,
		required:true
	},
	description:{
		type:String,
		required:true
	},
	assignTo:{
		type: String,
		required: true
	},
	updated:{ 
		type: Date, default: Date.now 
	}
})


var task = mongoose.model('task', taskSchema);
module.exports = task;


// module.exports = task;

// module.exports.getTask = (callback) => {
// 	task.find(callback);
// }

// module.exports.addTask = (Task, callback) => {
// 	task.create(Task, callback);
// }
