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

async function async1(){
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2(){
    console.log('async2')
}
console.log('script start')
setTimeout(function(){
    console.log('setTimeout')
},0)
async1();
new Promise(function(resolve){
    console.log('promise1')
    resolve();
}).then(function(){
    console.log('promise2')
})
console.log('script end')
