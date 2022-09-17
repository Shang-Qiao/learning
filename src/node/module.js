// require加载模块时会执行其中的代码

// require导入的就是module.exports导出的对象

const comment = require('moment');

console.log(comment().format('YYYY-MM-DD HH:mm:ss'));