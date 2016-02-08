var mongoose = require('mongoose');

var weatherpicSchema = {

  title: {
    type: String,
  },
  pic: {
    type: String
  }
};

module.exports = new mongoose.Schema(weatherpicSchema);
module.exports.weatherpicSchema = weatherpicSchema;
