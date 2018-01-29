var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public', 'dist')));


// mongoose connection
mongoose.connect('mongodb://localhost/teamManager');
require('./server/config/mongoose.js');

// load routes
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// server listen
app.listen(8000, function(){
	console.log('on port 8000');
})
