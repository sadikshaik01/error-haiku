const errorHaiku = require('../index');

// Initialize the beautiful error handler
errorHaiku.init();

console.log('App is running smoothly...');

// Let's intentionally cause a TypeError to see the Haiku
setTimeout(() => {
  console.log('About to crash!');
  const thisIsUndefined = undefined;
  thisIsUndefined(); // Throws TypeError: thisIsUndefined is not a function
}, 1000);
