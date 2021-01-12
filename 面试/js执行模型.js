// setTimeout(()=>{
//     console.log('time')
// },0);
// setImmediate(()=>{
//     console.log('imme')
// });
//随机
// setTimeout(()=>{
//     setTimeout(()=>{
//         console.log('time1')
//     },0)
//     setImmediate(()=>{
//         console.log('imme1')
//     })
// },0)
//永远imme先
//宏观任务 setTimeOut setImmediate setInterval I/O ui渲染  微观任务 process.nextTick Promise Object.observe MutationObserver
// setImmediate(()=>{
//     console.log('immessss')
//     setImmediate(()=>{
//         console.log('immeAAAAA')
//     });
//     process.nextTick(()=>{
//         console.log('provee')
//     })
// });
// setTimeout(()=>{
//     console.log('o');
//     process.nextTick(()=>{
//         console.log(1);
//         process.nextTick(()=>{
//             console.log(2)
//         })
//     })
//     process.nextTick(()=>{
//         console.log(3)
//     })
//     console.log('op');
// },0)

// async function async1(){
//     console.log('async1 start');
//     await async2()
//     console.log('async1 end');
// }
// async function async2(){
//     console.log('async2');
// }
// console.log('script start');
// setTimeout(function(){
//     console.log('setTimeout')
// },0)
// async1();
// new Promise(function(resolve){
//     console.log('promise1')
//     resolve();
// }).then(function(){
//     console.log('promise2')
// })
// console.log('script end')
//
// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 1000);
// new Promise((resolve) => {
//     console.log(3);
//     resolve();
// }).then(() => {
//     console.log(4);
// });
// setTimeout(() => {
//     console.log(5);
// }, 0);
// process.nextTick(function(){console.log(5)});
// console.log(6);
// 写出如下代码的输出结果
// setTimeout(function(){console.log(1)},0);
// new Promise(function(resolve,reject){
//     console.log(2);
//     resolve();
// }).then(function(){console.log(3)
// }).then(function(){console.log(4)});
// process.nextTick(function(){console.log(5)});
// console.log(6);
// console.log('script start');
//
// setTimeout(function() {
//     console.log('timeout1');
// }, 10);
//
// new Promise(resolve => {
//     console.log('promise1');
//     resolve();
//     setTimeout(() => console.log('timeout2'), 10);
// }).then(function() {
//     console.log('then1')
// })
//
// console.log('script end');
console.log(typeof(NaN));
console.log("str"== new String('str'))