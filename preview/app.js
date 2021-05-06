const Koa = require('koa')
const KoaStatic = require('koa-static')
const path = require('path')

const app = new Koa()

app.use(KoaStatic(path.join(__dirname, '../')))

app.listen(5600, () => {
  console.log('the test server is running on localhost:5600/public')
})