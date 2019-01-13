const chalk = require('chalk')

exports.error = (err) => {
  console.error(`${chalk.bgRed(' ERROR ')}: ${chalk.red(err)}`)
}
