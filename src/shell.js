const shell = module.exports = {}

shell.exit = () => {
  process.on('SIGINT', () => {
    process.stdout.write('\n Bye-bye! \n')
    process.exit()
  });
}
