var mongoose = require('mongoose');
var weatherpicSchema = require('./weatherpic');

module.exports = function() {
  mongoose.connect('mongodb://localhost:27017/test');
  var Weatherpic = mongoose.model('Weatherpic', weatherpicSchema, 'weatherpics');

  wagner.factory('Category', function() {
    return Category;
  });

  return {
    Category: Category
  };
};
