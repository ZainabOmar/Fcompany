var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const cors = require('cors');

var UsersController = require('./Users/userController.js');
var CompanyController = require('./Company/companyController.js');
var ScheduleController = require('./schedule/scheduleController.js');
var TaskController = require('./Task/taskController.js');
var FoodController = require('./food/foodController.js');


//middleware
app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());

/////cc
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



// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/company');
mongoose.Promise = global.Promise;
var db = mongoose.connection;


app.post('/api/user/signin' , UsersController.handleUsers.signin);
app.post('/api/user/signup', UsersController.handleUsers.signup);
app.get('/api/users', UsersController.handleUsers.getUsers)


app.post('/api/company', CompanyController.handleCompany.addCompany);
app.get('/api/companys', CompanyController.handleCompany.showAllCompanies);
app.get('/api/company/:userId', CompanyController.handleCompany.getCompany);

app.post('/api/schedule/add',ScheduleController.handlesched.add);
app.post('/api/schedule/meeting/add',ScheduleController.handlesched.setmeeting);
app.get('/api/schedule/:id',ScheduleController.handlesched.get);
app.get('/api/schedule/meeting/:id',ScheduleController.handlesched.getusers);
app.delete('/api/schedule/appoitment',ScheduleController.handlesched.delete);

app.post('/api/addTask', TaskController.handleTask.addTask);
app.get('/api/getTask/:userId', TaskController.handleTask.getTaskSameCompany);
app.delete('/api/Task/delete',TaskController.handleTask.delete);



app.post('/api/food/add', FoodController.handlefood.add);
app.post('/api/food/vote', FoodController.handlefood.vote);
app.get('/api/food/:userId', FoodController.handlefood.getfood);
app.delete('/api/food/delete',FoodController.handlefood.delete);

app.get('/api/gaming')



app.listen(process.env.PORT || 3300);
console.log('Running on port 3300...');



module.exports = app;