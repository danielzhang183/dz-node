const http = require('http')

const server = http.createServer((req, res) => {
  // res.write('ok')
  res.statusCode = 302
  res.setHeader('Content-type', 'text/html;charset=utf-8')
  res.end('测试中文')
})

server.listen(1234, () => {
  console.log('server is start...')
})
