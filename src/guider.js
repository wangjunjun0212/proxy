const http = require('http')
const fs = require('fs')
const url = require('url')
const Mock = require('mockjs')
const path = require('path')
const chalk = require('chalk')
const header = require('./header')

class Guider {
  // 类初始化
  constructor({ PORT, REQUEST, ROOT }) {
    this.PORT = PORT || '8084'
    this.ROOT = ROOT
    this.REQUEST = REQUEST
  }
  // 启动代理服务
  start() {
    http.createServer((req, res) => {
      // 获取真实本地文件目录地址
      const method = req.method
      const name = url.parse(req.url, true).pathname
      const route = this.REQUEST[method][name]
      if (!route) {
        res.end()
        return
      }
      const fileUrl = path.join(this.ROOT, route)

      // 处理静态文件并输出
      const file = fs.readFileSync(fileUrl, 'utf-8')
      const json = Mock.mock(JSON.parse(file))
      res.writeHead('200', header)
      res.end(JSON.stringify(json, null, 4))

      // response 提示信息
      if (req.method !== 'OPTIONS') {
        console.log(chalk.green('----- REQUEST SUCCESS: -----'))
        console.log(
          'URI:',
          chalk.black.bgWhite(fileUrl),
          chalk.yellow(`(${method})`), '\n'
        )
      }
    }).listen(this.PORT)
  }
}

module.exports = Guider
