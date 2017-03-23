var Company = require('./companyModule.js');
var User = require('../Users/userModule.js')

module.exports.handleCompany = {
	getCompany: function(req, res)  {
		User.findOne({_id:req.params.userId})
		.exec(function(err, user) {
			if(!user){
				res.status(500).send("user not found");
			}else{
        var temp = user.code
        Company.findOne({code:temp})
        .exec(function(err, comp) {
          if(!comp){
            // console.log(err)
            res.status(500).send("company not found");
          }else{
            res.json(comp);
          }
        }) 
      }
    })
  },

  showAllCompanies: function(req, res)  {
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
  	User.findOne({_id: req.body.AdminId}).exec(function(err, user){
  		if(err){
  			res.status(500).send(err);
  		}		
  		delete company._id;	
  		Company.addcompany(company,function (err, comp) {
  			if(err){
  				res.status(500).send(err);
  			}
  			comp.users.push(user._id);
  			comp.save(function(err, result){
  				if(err){
  					res.status(500).send(err);
  				}
  				res.json('done');
  			})
  		});

  	})
  }

}