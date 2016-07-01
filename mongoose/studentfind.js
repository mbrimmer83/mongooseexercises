var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo-db');

var Student = require('./studentsmodel');
Student.find(function(err, student){
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Found these students:', student);
})
