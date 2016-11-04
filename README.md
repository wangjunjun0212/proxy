#RESTful 模拟

所需环境：nodejs。mock 语法参考 <http://mockjs.com/>。

## 第一次运行
`npm install`

## Use
新建 js 文件， 例如：

    $ touch index.js   

Mac OSX 用户参考如下：

	var glob = require('./src/glob-proxy');


	glob.use('PORT', '8084');
	glob.use('TYPE', 'HTTP');
	glob.use('ROOT', '/User/xxx');
	glob.use('REQUEST',{
		'GET': {
			'/github': '/mock.json'
		},
		'POST': {
			'/django': '/abcd.json'
		}
	})
	glob.initialize();

运行`node index.js`, 在浏览器中访问 <http://127.0.0.1/github?local=1&mock=1&enforce=1>
