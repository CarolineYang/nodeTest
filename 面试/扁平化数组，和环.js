
function clean(arr, refPath=[arr]) {
    console.log('a',arr.filter(i => !refPath.includes(i)))
    return arr.filter(i => !refPath.includes(i))
        .map(i => Array.isArray(i) ? clean(i, [...refPath, i]) : i);
}
let a1 = [1,2,3];
let a2 = [7,8,a1,9];
// console.log(a2)
a1.push(a2)

console.log(a1)
console.log(clean(a1));
