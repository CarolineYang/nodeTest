// var arr = [1,2,3,4,5];
// var num = 3;
// arr.some(function(v){
//     if(v == num) {
//         return true;
//     }
//     console.log(v);
// });
// var arr = [1,2,3,4,5];
// var num = 3;
// arr.every(function(v){
//     if(v == num) {
//         return false;
//     }else{
//         console.log(v);
//         return true;
//     }
// });
// console.log(1);
//
// await a(4);
//
// console.log(1);
// async function a(n){
//
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             resolve();
//         }, n);
//     })
// }
// function doubleHeight(element) {
//     var currentHeight = element.clientHeight;
//     requestAnimationFrame(function () {
//         element.style.height = (currentHeight * 2) + 'px';
//     });
// }
//
// var elements=document.querySelectorAll('li')
// var span=document.querySelector('span');
// span.onclick=function(){
//     elements.forEach(doubleHeight);
// };

let  generator = function *() {
    yield 1;
    yield* [2,3,4];
    yield 5;
}
let a = generator();
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
// while(a){
//     console.log(a.next())
// }
var aa = 'hi';
var it = aa[Symbol.iterator]();
console.log(it.next())
console.log(it.next())
