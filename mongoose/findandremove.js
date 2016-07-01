var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo-db');
var Student = require('./studentsmodel');

Student.findOne({ name: 'Kyle'}, function(err, student) {
  if (err) {
    console.log(err.message);
    return;
  }
  var studentId = student._id;
  console.log('I found the id: ', studentId);
  Student.remove({ _id: studentId }, function(err, reply){
    if (err) {
      console.log(err.message);
    }
    console.log('Removed student', reply.result);
    process.exit();
  });
});
