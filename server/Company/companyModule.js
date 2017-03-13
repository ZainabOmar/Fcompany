var mongoose = require('mongoose');


var companySchema = new mongoose.Schema({
   code:[{
	  type:mongoose.Schema.Types.ObjectId,
	  ref:'user'
	}],
	username:{
	  type:String,
	  required:true
	}
})


companySchema.code.push(userSchema._id);


var company = mongoose.model('company', companySchema);

module.exports = company;