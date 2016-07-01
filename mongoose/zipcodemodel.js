var mongoose = require('mongoose');

var Zipcode = mongoose.model('Zipcode', {
  _id: String,
  city: String,
  loc: [Number],
  pop: Number,
  state: String
});

module.exports = Zipcode;
