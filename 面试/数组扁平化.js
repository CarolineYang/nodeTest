let a = [1,2,[3,4],5,[6,[7,8]]];
// a.map(function (item) {
//     if(Array.isArray(item)){
//         return
//     }
// })
function flatten(arr){
    while (arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr); // 如果你明白展开运算符的作用，是不是很简单？
        console.log(arr)
    }
    return arr;
}

console.log(flatten(a))