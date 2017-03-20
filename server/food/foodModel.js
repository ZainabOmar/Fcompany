var mongoose = require('mongoose');


var foodSchema = new mongoose.Schema({
  codeComp:[{
    type:String,
    ref:'company'
  }],
  dishName:{
     type:String,
    required:true
  },
  description:{
     type:String,
    required:true
  },
  votes:{
     type:Number,
    default:0
  }
})


var Food = mongoose.model('food', foodSchema);
module.exports = Food;