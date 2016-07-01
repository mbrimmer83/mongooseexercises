var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo-db');
var Student = require('./studentsmodel');

Student.findOne({ name: 'Regan' }, function(err, student){
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Student was found', student);
  student.points++;
  student.save(function(err){
    console.log('Data saved');
  });
});
