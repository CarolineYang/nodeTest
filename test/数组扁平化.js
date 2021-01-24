let a = [[1,2],3,new Set([4,5]),[[[[6]]]]];
function flatten(arr){
    while (arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr); // 如果你明白展开运算符的作用，是不是很简单？
    }
    return arr;
}
function fa(arr){
    while(arr.some((item)=>Array.isArray(item))){
        arr = [].concat(...arr)
    }
    return arr
}
// function flatten(arr) {
//     var res = [];
//     arr.map(item => {
//         if(Array.isArray(item)) {
//             res = res.concat(flatten(item));
//         } else {
//             res.push(item);
//         }
//     });
//     return res;
// }
// function flatten(arr) {
//     return arr.toString().split(',').map(function(item) {
//         return Number(item);
//         return +item;
//     })
// }
// function flatten(arr) {
//     console.log(arr.join(','))
//     return arr.join(',').split(',').map(function(item) {
//         return parseInt(item);
//     })
// }
console.log(flatten(a))
var arr = [true,function(){},[{},[2]]];
console.log(flatten(arr))
