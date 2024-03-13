const chalk = require('chalk');

module.exports = {
  log: (msg, color = 'green') => {
    console.log(chalk[color](msg));
  },
  error: (msg) => {
    console.log(chalk.red(msg));
  }
}
