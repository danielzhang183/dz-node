const http = require('http');

const server = http.createServer((req, res) => {
  const arr = [];
  req.on('data', (data) => {
    arr.push(data);
  });
  req.on('end', () => {
    console.log(Buffer.concat(arr).toString());
    res.end('server send');
  });
});
server.listen(1234, () => {
  console.log('internal server is running...');
});
