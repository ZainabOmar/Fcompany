var User = require('../Users/userModule.js');

module.exports.handlesched = {

  get : function (req,res) {
    console.log(req.params)
  var query = {'_id': req.params.id};
    User.findOne(query).exec(function(err,data){
      if(err){
        res.json(err)
      }else {
        res.json(data.appointments)
      }
    })
  },

  add:function(req,res){
    console.log("in add" , req.body)
    var appoitment= {
      date : req.body.date,
      starttime : req.body.starttime,
      endtime:req.body.endtime,
      title : req.body.title,
      description : req.body.description
    };
  var query = {'_id': req.body.id};
  var doc = {$push: {appointments: appoitment}};
  
 // User.findOneAndUpdate(query,doc, { "new": true})
 //       .exec()
 //       .then(data=>{
 //        res.json(data.appointments)
 //        })
       User.findOneAndUpdate(query,doc, { "new": true})
       .exec(function(err,data){
        if(err){
          res.json(err)
        }else {
          res.json(data.appointments)
        }
       })

  },
  getusers : function(req,res){
    var query = {'_id': req.params.id};
    User.findOne(query).exec(function(err,data){
      if(err){
        res.json(err)
         }else {
         var usercode=data.code;
      User.find({code:usercode}).exec(function(err,data){
      if(err){
        res.json(err);
      }else {
        var arrayNamesAndIds=[];
        for(var i=0;i<data.length;i++){
          var temp={
            id:data[i]._id,
            name:data[i].username
          };
          arrayNameAndIds.push(temp);
        }
        res.json(arrayNamesAndIds);
        
      }
          })
      }
    })
  
  },
  setmeeting:function(req,res){

 var appoitment= {
      date : req.body.date,
      starttime : req.body.starttime,
      endtime:req.body.endtime,
      title : req.body.title,
      description : req.body.description
    };
    for(var i=0;i<req.body.arrayOfnames.length;i++){

        var query = {username: req.body.arrayOfnames[i]};
        var doc = {$push: {appointments: appoitment}};
       User.findOneAndUpdate(query,doc, { "new": true})
       .exec(function(err,data){
        console.log(err,data)
        if(err){
          res.json(err)
        }else {
          
        }
       })

       

    }

    res.json('done adding meeting')


  },
  delete : function(req,res){

    var query = {username: req.body.username};
    var doc = {$pull:{ 'appointments' : { title :req.body.title}  } };

     User.findOneAndUpdate(query,doc,{ 'new': true },function(err,val){
      if (err){
        console.log(err);
            console.log(val);

          }else{
            console.log(val);

            res.json("deleted")
          }
                
     })

  }

}




