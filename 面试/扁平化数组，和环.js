let a1 = [1,2,3];
let a2 = [7,8,a1,9];
console.log(a2)
a1.push(a2);
console.log(a1,a2)
function clean(arr) {
    // 操作
    return arr;
}
clean(a2);
console.log(a2)
