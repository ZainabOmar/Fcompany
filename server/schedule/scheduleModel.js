var mongoose = require('mongoose');


var scheduleSchema = new mongoose.Schema({
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
});



var schedule = mongoose.model('schedule', scheduleSchema);

module.exports = schedule;