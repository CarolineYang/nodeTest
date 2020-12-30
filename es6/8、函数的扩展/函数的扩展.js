function log(x,y='world'){
    console.log(x,y)
}
let foo = 'outer'
function bar(func = x=>foo){
    let foo = 'inner';
    console.log(func())
}
bar();
let x =1;
function f(y=x) {
    let x = 2;
    console.log(y)
}
f();
function rest(a,...rest) {
    console.log(rest)
}
let a = 1
rest(a,2,3,4);
console.log(...[1,2,3]);
console.log(Math.max(...[1,2,3]));
console.log(Math.max.apply(null,[1,2,4]));
let bb = [1,2,3],cc = [4,5,6];
console.log(bb.concat(cc))
console.log(bb.push(...cc),bb,cc)
Array.prototype.push.apply(bb,cc);
console.log(bb);
console.log([...'hello']);
let map = new Map([[1,'one'],[2,'two']])
console.log([...map.keys()],[...map.values()])
var go = function *() {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...go()])
