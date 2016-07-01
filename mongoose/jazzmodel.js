var mongoose = require('mongoose');

var Album = mongoose.model('Album', {
  Albumname: String,
  Artist: String,
  Released: Number,
  Duration: Number,
  Styles: [String]
});

module.exports = Album
