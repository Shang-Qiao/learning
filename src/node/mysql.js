// 1.导入mysql
const mysql = require('mysql');
// 2.创建数据库连接
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'sys',
});
// 3.执行sql语句
db.query('SELECT * FROM sys_config', (err, result) => {
  if (err) return console.log(err.message);
  console.log(result);
});
