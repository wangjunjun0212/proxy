const chalk = require('chalk')
const shell = module.exports = {}

shell.listener = () => {
  process.on('SIGINT', () => {
    process.stdout.write(chalk.yellow('\n Bye-bye! \n'))
    process.exit()
  })
}
