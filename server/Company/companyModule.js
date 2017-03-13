var mongoose = require('mongoose');


var companySchema = new mongoose.Schema({
   code:[{
	  type:mongoose.Schema.Types.ObjectId,
	  ref:'user'
	}],
	username:{
	  type:String,
	  required:true
	},
	address:{
		type:String,
		required:true
	},
	phoneNumber:{
		type:Number,
		required:true
	},
  CompanyName:{
    type:String,
  }
})


// companySchema.code.push(userSchema._id);


var company = mongoose.model('company', companySchema);

module.exports = company;