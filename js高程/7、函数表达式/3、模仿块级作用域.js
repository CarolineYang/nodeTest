function f(count) {
    for(var i=0;i<count;i++){
        console.log(i)
    }
    var i;
    console.log(i);
}
// console.log(i)
f(5);
//匿名函数构造一个块级作用域
// (function () {
// //    这里是块级作用域
// })();
function ff(count) {
    (function () {
        for(var i=0;i<count;i++){
            console.log(i)
        }
    })();

    console.log(i);
}
ff(5)
