/* eslint-disable @typescript-eslint/no-var-requires */
const Koa = require('koa')
const koaStatic = require('koa-static')
const koaMount = require('koa-mount')
const path = require('path')

const resolve = file => path.resolve(__dirname, file)
const port = 8081

const app = new Koa()
// 开放目录
app.use(koaMount('/', koaStatic(resolve('../dist'))))

app.listen(port, () => {
  console.log(` Your application is running here: http://localhost:${port}`)
})
