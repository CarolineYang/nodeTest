// var o1 = {
//     text:'o1',
//     fn:function () {
//         console.log(this.text)
//     }
// };
// var o2 = {
//     text:'o2',
//     fn:function () {
//         return o1.fn()
//     }
// };
// var o3 = {
//     text:'o3',
//     fn:function () {
//         var f2 = o1.fn;
//         return f2()
//     }
// }
// // o1.fn();
// // o2.fn();
// // o3.fn();
// // console.log(o2.fn());
// // console.log(o3.fn());
// var obj = {
//     name: 'obj',
//     hello() {
//         console.log(this.name)
//     },
//     say:function () {
//         console.log(this.name)
//     }
// }
// var h = obj.hello;
// h();
// obj.hello();
// obj.say();
//
// var obj2 = {
//     name:'obj2',
//     hi(){
//         return () => {
//             console.log(this.name)
//         }
//     },
//     say(){
//         return function () {
//             console.log('s',this.name)
//         }
//     }
// }
// var h2 = obj2.hi()
// h2()
// obj2.hi()()
// let hw = obj2.say();
// obj2.say()()
// hw();
// 结果
// obj
var a = 1;
function fn1(){
    console.log(this.a);
}

const fn2 = () => {
    console.log(this.a);
}
console.log(global.a)
fn1();
fn2();
function fn(){
    this.a = 0;
    this.b = function (){
        console.log(this.a);
    }
}

fn.prototype = {
    b:function(){
        this.a = 20;
        console.log(this.a);
    },
    c:function(){
        this.a = 30;
        console.log(this.a);
    }
}

var myFun = new fn();
myFun.b();
myFun.c();
