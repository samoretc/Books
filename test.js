var assert = require('assert');
var fs = require('fs');
var mongoose = require('mongoose');
var weatherpicSchema = require('./weatherpic');
var superagent = require('superagent');
var app = require('./server');

/**
 *  This test suite is meant to be run through gulp (use the `npm run watch`)
 *  script. It will provide you useful feedback while filling out the API in
 *  `interface.js`. You should **not** modify any of the below code.
//  */
describe('Mongoose Schemas', function() {
  var Weatherpic = mongoose.model('Weatherpic', weatherpicSchema, 'weatherpics');

  describe('Weatherpic', function() {
    it('A weather pic can have a quote', function() {
      var weatherpic = new Weatherpic({ title: 'Cloudy' });
      assert.equal(weatherpic.title, 'Cloudy');
    });

    it('A weather pic can have a url pic', function() {
      var weatherpic = new Weatherpic({ pic: 'url' });
      assert.equal(weatherpic.pic, 'urfl');
    });
  });
});


var URL_ROOT = 'http://localhost:3000';

describe('Weatherpic API', function() {
  var server;
  beforeEach(function(){
    server = app().listen(3000);
        // debugger;

  });

  it('test', function(){
    assert.equal('1', '1');

  });
  it('It get data back from server', function(){
    superagent.get(URL_ROOT, function(err, res){
      debugger;
      assert.ifError(err);
      assert.equal(res.status, 200);
      console.log(res.text);
      assert.equal(res.text, "Hello, Worlds!");
      done();
    });
  });
});