// var定义的变量挂载在window下
// 宏任务：setTimeout, setInterval, UI渲染
// 微任务：Promise.then(), race(), all()
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 2000);
}

// 闭包：能够读取其他函数内部变量的函数
// 1.函数嵌套；2.内部函数引用外部函数中定义的变量
/*
  闭包会形成一个独自的作用域，内部的i是拷贝全局作用域下i的值，
  内部作用域内能找到i，就不用再顺着作用域链去外部查找i。
*/
for (var i = 0; i < 5; i++) {
  (function (x) {
    setTimeout(() => {
      console.log(x);
    }, 2000);
  })(i);
}
