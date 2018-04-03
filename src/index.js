const fs = require('fs')
const chalk = require('chalk')
const shell = require('./shell')
const Guider = require('./guider')
const globConfig = {}

// 拦截中断信号，输出提示信息
shell.listener()

// 公共对外
module.exports = {
  init() {
    const guider = new Guider(globConfig)
    console.log(
      '> Launch mock tool at',
      chalk.underline(`http://localhost:${guider.PORT}`)
    )
    fs.readFile(`${__dirname}/../package.json`, 'utf-8', (err, tmpl) => {
      err
        ? console.log(chalk.redBright(err))
        : console.log('> Version:', JSON.parse(tmpl).version, '\n')
      guider.start()
    })
  },
  set(k, v) {
    globConfig[k] = v
  }
}
