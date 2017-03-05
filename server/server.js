var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var UserController = require('./Users/userController.js')

//middleware
app.use(express.static(__dirname + '../client'));
app.use(bodyParser.json());


// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/company');
var db = mongoose.connection;

app.post('/api/user/signin' , UserController.handleUsers.signin);
app.post('/api/user/signup', UserController.handleUsers.signup);
app.get('/api/users', UserController.handleUsers.getUsers)



app.listen(process.env.PORT || 3000);
console.log('Running on port 3000...');

module.exports = app;