const fs = require('fs')
const shell = require('./shell')
const Guider = require('./guider')
const glob_config = {}

// 拦截中断信号，输出提示信息
shell.exit();

// 公共对外
module.exports = {
  init () {
    const guider = new Guider(glob_config)
    guider.start()
    console.log(`> Start server at http://localhost:${guider.PORT}`)
    fs.readFile(__dirname+'/../package.json', 'utf-8', (err, tmpl) => {
      console.log('> Version:', JSON.parse(tmpl).version, '\n')
    })
  },
  set (k, v) {
    glob_config[k] = v
  }
}
