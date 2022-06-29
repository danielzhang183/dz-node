const http = require('http');

const options = {
  host: 'localhost',
  port: 1234,
  path: '/',
  method: 'POST',
};

const server = http.createServer((request, response) => {
  const req = http.request(options, (res) => {
    const arr = [];
    res.on('data', (data) => {
      arr.push(data);
    });
    res.on('end', () => {
      const ret = Buffer.concat(arr).toString();
      response.setHeader('Content-type', 'text/html;charset=utf-8');
      response.end(ret);
    });
  });

  req.end('测试通道');
});

server.listen(2345, () => {
  console.log('local server is running...');
});
