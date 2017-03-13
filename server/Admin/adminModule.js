var mongoose = require('mongoose');


var adminSchema = new mongoose.Schema({
	compname:{
		type:String,
		required:true
	},
	admname:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	pass:{
		type:String,
		required:true
	},
	address:{
		type:String,
		required:true
	},
	phonenumber:{
		type:Number,
		required:true
	},
	flag:{
		type:Boolean,
		required:true
	}
});

var admin = mongoose.model('admin', adminSchema);

module.exports = admin;