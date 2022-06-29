const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  // console.log('req is coming')
  const { pathname, query } = url.parse(req.url);
  console.log(pathname, '----', query);

  const arr = [];
  req.on('data', (data) => {
    arr.push(data);
  });
  req.on('end', () => {
    // console.log(Buffer.concat(arr).toString())
    const obj = Buffer.concat(arr).toString();
    console.log(req.headers);
    let ret;
    switch (req.headers['content-type']) {
      case 'application/json':
        ret = JSON.parse(obj);
        ret.add = '666';
        res.end(JSON.stringify(ret));
        break;
      case 'application/x-www-form-urlencoded':
        ret = querystring.parse(obj);
        res.end(JSON.stringify(ret));
        break;
      default:
    }
  });
});

server.listen(1234, () => {
  console.log('server is running');
});
