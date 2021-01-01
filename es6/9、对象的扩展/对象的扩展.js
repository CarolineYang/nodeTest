let a = {
    name:'ypp'
};
console.log(a.name,a['name'])
let target = {a:1};
let source1 = {b:2};
let source2 = {c:3};
Object.assign(target,source1,source2);
console.log(target)
Object.assign(target,Object.defineProperty({},'invisible',{
    enumerable:false,//可枚举性
    value:'hello',
    writable:true,
    configurable:true
}));
console.log(target);
console.log(Object.assign([1,2,3],[4,5]))
console.log({...source2})
