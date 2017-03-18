var mongoose = require('mongoose');


var scheduleSchema = new mongoose.Schema({
   users:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  }],
  username:{
    type:String,
    required:true
  },
  userid:{
    type:String,
    required:true
  },
  date:{
    type:String,
    required:true
  },
    time:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  }
});



var schedule = mongoose.model('schedule', scheduleSchema);

module.exports = schedule;