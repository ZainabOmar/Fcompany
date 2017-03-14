var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const cors = require('cors');

var UsersController = require('./Users/userController.js')
var CompanyController = require('./Company/companyController.js')

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


app.post('/api/company', CompanyController.handelCompany.addCompany);
app.get('/api/companys', CompanyController.handelCompany.showCompany)


app.listen(process.env.PORT || 3000);
console.log('Running on port 3000...');

module.exports = app;