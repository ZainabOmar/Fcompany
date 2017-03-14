var mongoose = require('mongoose');


var companySchema = new mongoose.Schema({
   users:[{
	  type:mongoose.Schema.Types.ObjectId,
	  ref:'user'
	}],
	code:{
	  type:String,
	  required:true
	},
	address:{
		type:String,
		required:true
	},
	phoneNumber:{
		type:String,
		required:true
	},
    CompanyName:{
    type:String,
  }
})


// companySchema.code.push(userSchema._id);


var company = mongoose.model('company', companySchema);

module.exports = company;


// Get Books from mongo data base
module.exports.getcompany = (callback) => {
	company.find(callback);
}



// Add company to mongo data base
module.exports.addcompany = (Company, callback) => {
	company.create(Company, callback);
}
