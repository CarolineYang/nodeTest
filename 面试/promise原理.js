// let p = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('done');
//         resolve('5秒');
//     }, 5000);
// }).then((tip) => {
//     console.log('s',tip);
// });
//then 的说明
// let p = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('done');
//         resolve('5秒');
//     }, 5000);
// });
//
// p.then(tip => {
//     console.log('then1', tip);
// });
//
// p.then(tip => {
//     console.log('then2', tip);
// });
// let p = new Promise(resolve => {
//     console.log('同步执行');
//     resolve('同步执行');
// }).then(tip => {
//     console.log('then1', tip);
// }).then(tip => {
//     console.log('then2', tip);
// });
// console.log('sss')
// setTimeout(() => {
//     p.then(tip => {
//         console.log('then3', tip);
//     })
// });
//
new Promise((resolve, reject) => {
    console.log(1);
    resolve({
        name: "第1个传递的值"
    });
}).then((result) => {
    // console.log(2, result);
    setTimeout(() => {
        console.log(2, result);
        // resolve({
        //     name: "第2个传递的值"
        // })
    }, 1000)
    return Promise.resolve({
        name: "第2个传递的值"
    })
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         console.log(2, result);
    //         resolve({
    //             name: "第2个传递的值"
    //         })
    //     }, 1000)
    // })
}).then((result) => {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
            console.log(3, result)
            resolve({
                name: "第3个传递的值"
            })
        // }, 1000)
    })
}).then((result) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(4, result)
            resolve({
                name: "第4个传递的值"
            })
        }, 1000)
    })
}).then((result) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(5, result)
        }, 1000)
    })
});
console.log('sss')
// var p1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(1)
// })
// var p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(2)
//         resolve(2)
//     }, 1000);
// })
// var p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(3);
//         resolve(3);
//     }, 1000);
// })
//
// Promise.all([p1, p2, p3]).then((result) => {
//     console.log("执行完毕",result);
// });
