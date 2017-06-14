var express = require("express");
var fs = require('fs');
var dummyjson = require('dummy-json');
var moment = require('moment');
var Handlebars = require('handlebars');

var template = fs.readFileSync(__dirname+'/views/index.hbs', {encoding: 'utf8'});
var app = express();

app.get('/stream', function(req, res) {
    res.set('Content-Type', 'application/json');
    res.send(dummyjson.parse(template));
});

// Format date to RFC-822 datetime for XML feeds
Handlebars.registerHelper('datetime', function(date) {
  date = date || moment();
  return moment(date);
});

app.listen(80, '0.0.0.0', function () {
   console.log('Listening to port:' + 80);
});

