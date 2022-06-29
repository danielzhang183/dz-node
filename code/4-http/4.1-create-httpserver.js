const http = require('http')

let server = http.createServer((req, res) => {
  console.log(123)
})

server.listen(1234, () => {
  console.log('server is running...')
})
