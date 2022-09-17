const fs = require('fs');

fs.readFile('test.txt', 'utf8', function (err, dataStr) {
  // 读取成功err为null
  // 读取成功err为错误对象，data为undefined
  console.log(err);
  console.log(dataStr);
});

fs.writeFile('write.txt', 'Hello Node.js', (err) => {
  console.log(err);
});

