var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const cors = require('cors');

var UsersController = require('./Users/userController.js');
var CompanyController = require('./Company/companyController.js');
var scheduleController = require('./schedule/scheduleController.js');
var TaskController = require('./Task/taskController.js');

//middleware
app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());

app.use(cors());


// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/company');
var db = mongoose.connection;


app.post('/api/user/signin' , UsersController.handleUsers.signin);
app.post('/api/user/signup', UsersController.handleUsers.signup);
app.get('/api/users', UsersController.handleUsers.getUsers)


app.post('/api/company', CompanyController.handleCompany.addCompany);
 //app.get('/api/companys', CompanyController.handleCompany.showAllCompanies);
app.get('/api/company/:userId', CompanyController.handleCompany.getCompany);

app.post('/api/schedule/add',scheduleController.handlesched.add);
app.post('/api/schedule/meeting/add',scheduleController.handlesched.setmeeting);
app.get('/api/schedule/:id',scheduleController.handlesched.get);
app.get('/api/schedule/meeting/:id',scheduleController.handlesched.getusers);
app.delete('/api/schedule/appoitment',scheduleController.handlesched.delete);

app.post('/api/addTask/:compId', TaskController.handleTask.addTask);
app.get('/api/getTask/:compId', TaskController.handleTask.getTaskSameCompany);

app.listen(process.env.PORT || 3000);
console.log('Running on port 3000...');

module.exports = app;