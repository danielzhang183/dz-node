const http = require('http');

const options = {
  host: 'localhost',
  port: 1234,
  path: '/?a=1',
  method: 'POST',
  headers: {
    // 'Content-type': 'application/json'
    'Content-type': 'application/x-www-form-urlencoded',
  },
};

// http.get(options, (res) => {})
const req = http.request(options, (res) => {
  const arr = [];
  res.on('data', (data) => {
    arr.push(data);
  });
  res.on('end', () => {
    console.log(Buffer.concat(arr).toString());
  });
});
// req.end('client send')
// req.end('{"name":"dylan"}')
req.end('a=1&b=2');
