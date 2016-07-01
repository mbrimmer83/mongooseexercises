
var matt = new Student({
  name: 'Matt',
  links: {
    website: 'https://github.com/mbrimmer83/matthewbrimmerwebsite',
    github: 'https://github.com/mbrimmer83'
  },
  gender: 'male',
  points: 15,
  projects: [
    'Sportakus',
    'Draw Together',
    'Tic Tac Toe',
    'Movie App',
    'Black Jack'
  ]
});

matt.name = 'Matthew';
matt.points = 20;
matt.projects.push('Another projects');
matt.links.website = 'http://matt.com';
matt.save(function(err) {
  /* ... */
});



Student.create({
  name: 'Matt',
  links: {
    website: 'https://github.com/mbrimmer83/matthewbrimmerwebsite',
    github: 'https://github.com/mbrimmer83'
  },
  gender: 'male',
  points: 15,
  projects: [
    'Sportakus',
    'Draw Together',
    'Tic Tac Toe',
    'Movie App',
    'Black Jack'
  ]
}, function(err, matt) {

})












Student.findOne({ name: 'Matthew' }, function(err, matt) {
  matt.points++;
  matt.links.website = 'http://matt.com';
  matt.save(function(err) {
    /* ... */
  });
});











Student.update(
  {},
  { $inc: 'points' },
  { multi: true }
)


//
