// let a = [1,2,3];
// let b = a.reduce((prev,next)=>{
//     return prev+next
// });
// console.log(b);
// Array.prototype.reduce = function (fn) {
//     if(index == arr.length){
//         return prev;
//     }
//     prev = fn(prev,next);
//     next = arr[index+2];
//     index++;
//     return arguments.callee(prev,next,index,arr)
// };
// let a = [1,4,5][2,3,5,6]
// function f() {
//
// }
// console.log(1);
// setTimeout(() => {
//     console.log(2);
//     Promise.resolve().then(data => {
//         console.log(3);
//     });
// });
// new Promise((resolve) => {
//     resolve()
//     console.log(4)
// }).then(() => {
//     console.log(5);
//     setTimeout(() => {
//         console.log(6);
//     });
// }).then(() => console.log(7))
// console.log(8);

let n = 10;
// let arr = [];
// for(let i=0;i<n;i++){
//     arr.push({
//         name:'ypp'+i,
//         val:parseInt(Math.random()*12)+1
//     })
// }
// console.log(arr)
// function def(aa,num){
//     for(let i=0;i<num;i++){
//         aa[i].val += Math.random()*12+1;
//     }
//     aa.sort((a,b)=>b.val-a.val);
// }
let arr =[
    { name: 'ypp0', val: 3 },
    { name: 'ypp1', val: 9 },
    { name: 'ypp2', val: 10 },
    { name: 'ypp3', val: 1 },
    { name: 'ypp4', val: 2 },
    { name: 'ypp5', val: 14 },
    { name: 'ypp6', val: 14 },
    { name: 'ypp7', val: 14 },
    { name: 'ypp8', val: 14 },
    { name: 'ypp9', val: 14 }
]
// 为了确定下一次是谁来分享，团队中引入了分享积分制，具体规则为：
// 每个人都有一个积分，初始值是0。
// 每次分享后所有人摇一轮骰子，点数作为积分累加到各自的积分中，骰子范围是1-12。
// 积分最高的2个人将作为下一次的分享人。
// 为了避免连续分享，某个人分享后他的积分会被清零且跳过本次的摇骰子环节。
// 如果积分最高的人数超过2人，则相同分数的人继续摇骰子，直到决出2个积分最高的人。需要注意的是，这期间摇骰子的积分也同样累积。
let res = [];
function top(arr,num,ta) {
    for(let i=0;i<num;i++){
        arr[i].val += parseInt(Math.random()*12)+1;
    }
    arr.sort((a,b)=>b.val-a.val);
    console.log(arr,'ss')
    if(arr[2].val<arr[1].val){
        arr[0].val = 0;
        arr[1].val = 0;
        console.log('ssjinlai',[arr[0],arr[1]])
        res.push(arr[0],arr[1]);
        return;
    }else{
        // if(arr[0].val>arr[1].val){
        //
        // }else{
            let nums = 0;
            for(let i=0;i<arr.length;i++){
                if(arr[i].val == arr[1].val){
                    nums++;
                }
            }
            console.log(nums,"????")
            top(arr,nums);

        // }

    }
}
top(arr,0)
console.log(res)
console.log('ssss',)
//[{ a: 1, b: [4, 5, 6], c: 1, d: [7, 8]},
//{ a: 2, b: [4, 5, 6], c: 1, d: [7, 8]},
//{ a: 3, b: [4, 5, 6], c: 1, d: [7, 8]}]
