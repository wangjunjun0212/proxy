const http = require('http')
const fs = require('fs')
const url = require('url')
const Mock = require('mockjs')
const path = require('path')
const chalk = require('chalk')
const header = require('./header')

class Guider {
  // 类初始化
  constructor ({PORT, REQUEST, ROOT}) {
    this.PORT = PORT || '8084'
    this.ROOT = ROOT
    this.REQUEST = REQUEST
    this.TYPE = 'HTTP'
    this.RESULT = {}
  }
  // 启动代理服务
  start () {
    http.createServer((request, response) => {
      this.request = request
      this.response = response

      this.reqRealUrl()
      this.respStaticFile()

      // response 提示信息
      if (request.method !== 'OPTIONS') {
        console.log(chalk.green('----- REQUEST SUCCESS: -----'))
        console.log('URI:', chalk.black.bgWhite(this.RESULT.url), '\n')
      }
    }).listen(this.PORT)
  }
  // 获取真实本地文件目录地址
  reqRealUrl () {
    const request = this.request
    const result = this.RESULT

    Object.assign(result, {
      name: url.parse(request.url, true).pathname,
      method: request.headers['access-control-request-method'] || request.method
    })
    Object.assign(result, {
      url: path.join(this.ROOT, this.REQUEST[result.method][result.name])
    })
  }
  // 处理静态文件并输出
  respStaticFile () {
    const json = Mock.mock(JSON.parse(fs.readFileSync(this.RESULT.url, 'utf-8')))
    this.response.writeHead('200', header)
    this.response.end(JSON.stringify(json, null, 4))
  }
}

module.exports = Guider
