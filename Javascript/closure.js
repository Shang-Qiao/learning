// var
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 2000);
}

// 闭包
for (var index = 0; index < 5; index++) {
  (function x(x) {
    setTimeout(() => {
      console.log(x);
    }, 2000);
  })(index);
}
