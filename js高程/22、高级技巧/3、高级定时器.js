// var btn=document.getElementById('btn');
// btn.onclick=function () {
//     setTimeout(function () {
//         document.getElementsByTagName('ul')[0].style.visibility='hidden';
//         console.log('??')
//     },250);
//     console.log('<<<')
// };
// for (var  i = 0; i < 5; i++) {
//     setTimeout(function(){
//         console.log(i);
//         }, 1000 * i);
//
// }
//  for (var  i = 0; i < 5; i++) {
//      //搞一个私有作用域 吧i存进去
//      (function (i) {
//          setTimeout(function(){
//              console.log(i);
//          }, 1000 * i);
//      })(i);
//      //闭包
//      setTimeout(function (i) {
//          return function () {
//              console.log(i);
//          }
//      }(i),1000*i)
//      setTimeout(function (i) {
//
//          console.log(i);
//
//      }(i),1000*i)
//  }
// setTimeout(function() {
//     console.log(1)
// }, 0);
// new Promise(function executor(resolve) {
//     console.log(2);
//     for( var i=0 ; i<10000 ; i++ ) {
//         i == 9999 && resolve();
//     }
//     console.log(3);
// }).then(function() {
//     console.log(4);
// });
// console.log(5);
function set() {
    for(var i=0;i<4;i++){
        var tc=setTimeout(function (i) {
            console.log(i);
            clearTimeout(tc)
        }(i),1000)
    }
}
set();
