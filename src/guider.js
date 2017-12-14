const http = require('http')
const fs = require('fs')
const url = require('url')
const Mock = require('mockjs')
const path = require('path')
const buffer = require('buffer')
const assert = require('assert')
const chalk = require('chalk')
const header = require('./header')

class Guider {
  // 类初始化
  constructor ({PORT, REQUEST, ROOT}) {
    this.PORT = PORT || '8084'
    this.ROOT = ROOT || __dirname
    this.TYPE = 'HTTP'
    this.REQUEST = REQUEST
  }
  // 启动代理服务
  start () {
    http.createServer((request, response) => {
      this.request = request
      this.response = response
      const result = this.handler()
      const noOpts = this.request.method !== 'OPTIONS'
      noOpts && console.log(chalk.green('----- REQUEST SUCCESS: -----'))
      if (result) {
        noOpts && console.log('URI:', chalk.gray(result.URL))
        this.staticFileService(result)
      }
    }).listen(this.PORT)
  }
  // 请求识别路由
  handler () {
    const parse = url.parse(this.request.url, true)
    const result = {
      type: 'HTTP',
      name: parse.pathname
    }
    this.requeParse(result, parse)
    return result
  }
  // 对请求参数进行序列化处理
  requeParse (result, {search, query}) {
    if (search.length) {
      result.query = query
    }
    //根据头信息进行代理提交
    result.headers = this.request.headers
    //分析真实请求method
    result.method = result.headers['access-control-request-method'] || this.request.method
    //生成真实本地文件目录地址或远程代理地址
    if (this.TYPE === 'HTTP') {
      result.URL = path.join(this.ROOT, this.REQUEST[result.method][result.name])
    }
    //请求&参数
    result.search = search
  }
  // 错误处理
  error () {
    this.responseHeader()
    this.responseBody('错误！请先检查一下 JSON 文件格式！')
  }
  // 处理成功的响应
  responseHeader () {
    this.response.writeHead('200', header)
  }
  // 响应主体的处理
  responseBody (body) {
    this.responseHeader()
    this.response.end(body)
  }
  // 处理静态文件
  staticFileService (result) {
    fs.readFile(result.URL, 'utf-8', (err, tmpl) => {
      const json = Mock.mock(JSON.parse(tmpl))
      this.responseHeader()
      this.responseBody(JSON.stringify(json, null, 4))
    })
    
  }
}

module.exports = Guider
