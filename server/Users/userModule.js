var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username:{
	 type:String,
	 required:true	
	},
	password:{
	  type:String,
	  required:true
	},
	email:{
	  type:String,
	  required:true 
	},
	code:{
	  type:String,
	  required:true
	},
	job:{
	  type:String
	}
});

var user = mongoose.model('user', userSchema);

module.exports = user;