const haikus = require('./haikus');

const colors = {
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  italic: '\x1b[3m'
};

function printHaiku(errorName) {
  const haikuLines = haikus[errorName] || haikus['Generic'];
  
  console.error();
  console.error(`${colors.cyan}${colors.italic}🌸 ${haikuLines[0]} 🌸${colors.reset}`);
  console.error(`${colors.cyan}${colors.italic}🍃 ${haikuLines[1]} 🍃${colors.reset}`);
  console.error(`${colors.cyan}${colors.italic}🍂 ${haikuLines[2]} 🍂${colors.reset}`);
  console.error();
}

function init() {
  process.on('uncaughtException', (error) => {
    printHaiku(error.name);
    console.error(error); // Print the actual stack trace
    process.exit(1); // Standard Node.js behavior is to exit on uncaught exceptions
  });

  process.on('unhandledRejection', (reason) => {
    const errorName = (reason && reason.name) ? reason.name : 'Generic';
    printHaiku(errorName);
    console.error(reason);
    process.exit(1);
  });
}

module.exports = { init, printHaiku };
