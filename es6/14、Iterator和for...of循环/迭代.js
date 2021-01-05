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

// setTimeout(()=>{
//     console.log('time')
// },0);
// setImmediate(()=>{
//     console.log('imme')
// });
// setTimeout(()=>{
//     setTimeout(()=>{
//         console.log('time1')
//     },0)
//     setImmediate(()=>{
//         console.log('imme1')
//     })
// },0)
// setImmediate(()=>{
//     console.log('immessss')
//     setImmediate(()=>{
//         console.log('immeAAAAA')
//     });
//     process.nextTick(()=>{
//         console.log('provee')
//     })
// });
setTimeout(()=>{
    console.log('o');
    process.nextTick(()=>{
        console.log(1);
        process.nextTick(()=>{
            console.log(2)
        })
    })
    process.nextTick(()=>{
        console.log(3)
    })
    console.log('op');
},0)
