'use strict';

var dbname = process.env.DBNAME || 'default-plane-db';
var port = process.env.PORT || 4000;
var bodyParser     = require('body-parser');
var express        = require('express');
var route          = require('./routes/index');

/* --- configuration    */
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

/* --- pipeline          */
app.use(express.static(__dirname + '/static'));
app.use(bodyParser());

app.get('/', route.index);

/* --- http server       */
var server = require('http').createServer(app);
server.listen(port, function(){
  console.log('Node server listening. Port: ' + port + ', Database: ' + dbname);
});

module.exports = app;
