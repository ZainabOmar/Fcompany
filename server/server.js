var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const cors = require('cors');

var UsersController = require('./Users/userController.js');
var CompanyController = require('./Company/companyController.js');
var scheduleController = require('./schedule/scheduleController.js');
var TaskController = require('./Task/taskController.js');
var FoodController = require('./food/foodController.js');

///////////////////////////////////////////
var httpp = require('http');
var ioo = require('socket.io').listen(httpp);


//middleware
app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());

/////ccccccccccccccc
let http = require('http').Server(app);
let io = require('socket.io')(http);
io.on('connection', (socket) => {
  console.log('The user is connected');
  socket.on('disconnect', function(){
    console.log('The user is disconnected');
  });
   socket.on('add-message', (message) => {
	console.log(message)
    io.emit('message', {type:'new-message', text: message});   
  });
});

// Heroku config //////////////////////////////////////
if(process.env.PORT) {
  ioo.configure(function () { 
    ioo.set("transports", ["xhr-polling"]); 
    ioo.set("polling duration", 10); 
  });  
}

// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/company');
var db = mongoose.connection;


app.post('/api/user/signin' , UsersController.handleUsers.signin);
app.post('/api/user/signup', UsersController.handleUsers.signup);
app.get('/api/users', UsersController.handleUsers.getUsers)


app.post('/api/company', CompanyController.handleCompany.addCompany);
app.get('/api/companys', CompanyController.handleCompany.showAllCompanies);
app.get('/api/company/:userId', CompanyController.handleCompany.getCompany);

app.post('/api/schedule/add',scheduleController.handlesched.add);
app.post('/api/schedule/meeting/add',scheduleController.handlesched.setmeeting);
app.get('/api/schedule/:id',scheduleController.handlesched.get);
app.get('/api/schedule/meeting/:id',scheduleController.handlesched.getusers);
app.delete('/api/schedule/appoitment',scheduleController.handlesched.delete);

app.post('/api/addTask', TaskController.handleTask.addTask);
app.get('/api/getTask/:userId', TaskController.handleTask.getTaskSameCompany);
app.delete('/api/Task/delete',TaskController.handleTask.delete);



app.post('/api/food/add', FoodController.handlefood.add);
app.post('/api/food/vote', FoodController.handlefood.vote);
app.get('/api/food/:userId', FoodController.handlefood.getfood);
app.delete('/api/food/delete',FoodController.handlefood.delete);




// app.listen(process.env.PORT || 8000);
// console.log('Running on port 8000...');

//////cccccc 
http.listen(process.env.PORT || 8000, () => {
  console.log('started on port 8000');
});

module.exports = app;