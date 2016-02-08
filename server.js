var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var weatherpicSchema = require('./weatherpic');
var bodyParser = require('body-parser')



module.exports = function(){
var app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

mongoose.connect('mongodb://localhost:27017/test');

// Parameters are: model name, schema, collection name
var Weatherpic = mongoose.model('Weatherpic', weatherpicSchema, 'weatherpics');

app.get('/', function (req, res) {
//Send all Weatherpics in JSON
var wp = [];
Weatherpic.find({}, function(err, weatherpic) {
  if (err) {
    console.log(err);
  }
  weatherpic.forEach(function(element){
    wp.push( {'pic': element.pic,
              'url': element.title});

  })
   res.send(wp);
 });
});

app.post('/addWeatherPic', function(req, res) {
var weatherpic = new Weatherpic({ id: '1', title: req.body.pic, pic: req.body.url });
weatherpic.save(function(error){
  if (error) {
    console.log(error);
  }
});
res.send(req.body);
});

return app;


};