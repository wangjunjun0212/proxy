const glob = require('../../src/')

// 可自定义端口号，默认 8084
// glob.set('PORT', '8888')

// 定义 mock 文件所在路径，这里采用当前路径
glob.set('ROOT', __dirname)

// mock 文件与 api 地址映射关系
glob.set('REQUEST', {
  'GET': {
    '/api/start': './start.json',
    '/api/sort': './sort.json'
  },
  'POST': {
    '/api/login': './login.json'
  }
})
glob.init()
