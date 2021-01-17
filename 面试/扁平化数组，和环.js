
function clean(arr, refPath=[arr]) {
    // console.log('a',arr.filter(i => !refPath.includes(i)))
    return arr.filter(i => !refPath.includes(i))
        .map(i => Array.isArray(i) ? clean(i, [...refPath, i]) : i);
}
let a1 = [1,2,3];
let a2 = [7,8,a1,9];
// console.log(a2)
// a1.push(a2)
//
// console.log(a1)
// console.log(clean(a1));
let a = [1,[3,4,[5,6]],7,0];
// let res = a.map(function (item) {
//     if(Array.isArray(item)){
//         return [].concat(...item)
//     }
// });
// while(a.some((item)=>Array.isArray(item))){
//     a = a.flat()
// }
// 如果原数组有空位，flat()方法会跳过空位。 flat(number)
//flatMap()方法对原数组的每个成员执行一个函数，
// 相当于执行Array.prototype.map(),然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。
console.log(a.flat(Infinity),[[2, 4], [3, 6], [4, 8]].flat(),[2, 3, 4].flatMap((x) => [x, x * 2]))

