const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'test.txt'), 'utf8', (err, data) => {
  console.log(err);
  console.log(data);
});

console.log(path.join('/a', '/b', '../', './c'));
// 获取文件名
console.log(path.basename('/a/b/c/index.html'));
console.log(path.basename('/a/b/c/index.html', '.html'));
// 获取文件扩展名
console.log(path.extname('/a/b/c/index.html'));