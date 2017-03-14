var Company = require('./companyModule.js');
var User = require('../Users/userModule.js')

module.exports.handelCompany = {
  // get company from data base
	showCompany: function(req, res)  {
		Company.getcompany(function(err, Companys)  {
			if(err){
				throw err;
			}
			res.json(Companys);
		});
	},

  // add company to data base
	addCompany : function(req, res)  {
		var company = req.body;
		User.findOne({_id: req.body._id}).exec(function(err, user){
			if(err){
				throw err;
			}		
			delete company._id;	
			Company.addcompany(company,function (err, comp) {
				if(err){
					throw err;
				}
				comp.users.push(user._id);
				comp.save(function(err, result){
					if(err){
						throw err;
					}
					res.json(comp);
				})
			});
			
		})
	}

}