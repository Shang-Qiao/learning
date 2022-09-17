const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  // 监听请求
  console.log(req.method);
  console.log('someone visited server.');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('Hello, 你好');
});

server.listen(8080, () => {
  console.log('server is running at http://127.0.0.1:8080');
});
