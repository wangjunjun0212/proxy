# RESTful 模拟

利用 mockjs 产生随机数来制造临时数据。所需环境：nodejs。mock 语法参考 <http://mockjs.com/>。

## 第一次运行
`npm install`

## 使用
1. 根据不同项目在 mock 目录下建立不同目录
2. 按照 demo 的 index.js 创建 REST API
3. 按照对应的地址创建不同的 mockdata

## 运行
按以下例子运行即可：
```
node mock/<你的目录>
```
或者在 `package.json` 的 `scripts` 目录中编辑你需要执行的目录，然后：
```
npm start
```
