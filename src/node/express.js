const express = require('express');

const app = express();
app.listen(80, () => {
  console.log('express is running at http://127.0.0.1:80');
});

app.get('/user/:id/:name', (req, res) => {
  // 获取?拼接参数
  console.log(req.query);
  // 获取:id
  console.log(req.params)
  res.send({
    username: 'jack',
    age: 18,
  });
});

app.post('/user', (req, res) => {
  res.send('请求成功！');
});
