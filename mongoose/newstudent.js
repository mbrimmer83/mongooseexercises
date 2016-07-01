var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo-db');
var Student = require('./studentsmodel');

var kyle = new Student ({
  name: 'Kyle',
  links: {
    website: 'http://www.kyleluck.com',
    github: 'https://github.com/kyleluck'
  },
  gender: 'male',
  projects: ['Sentiment', 'Draw Together', 'Tic Tac Toe', 'Movie App', 'Black Jack'],
  points: 15
});


kyle.save(function(err){
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Saved student', kyle);
  process.exit();
});
