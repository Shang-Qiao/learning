// 作用域
function c() {
  var b = 1;
  function a() {
    console.log(b); // 当前作用域有var b = 2，取当前作用的b
    var b = 2;
    console.log(b);
  }
  a();
}
c();
