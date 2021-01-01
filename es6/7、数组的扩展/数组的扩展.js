let a = new Map();
a.set('first',1);
a.set('second',2);
console.log(Array.from(a))
let b = new Set();
b.add(3);
b.add(4);
console.log(Array.from(b))
let aa = 'hello';
console.log(Array.from(aa))
let cc = Array.of(4,5);
console.log(cc,Array(6,7),Array(3));
let d = [1,2,3,4,5];
console.log(d.copyWithin(1,3))
console.log(Array.from(d,(x)=>x*x))
let cs = d.find((value,index,arr)=>{
    return value>2
});
console.log(cs);
let t = [1,2,3,'4']
console.log(t.indexOf(4),t.includes(4))
let shu = [1,2,3];
// let hh = [for (i of [1,2,3]) i*i];
console.log(shu.filter((i)=>i>2))
for(let index of ['a','b'].keys()){
    console.log(index)
}
for(let ele of ['a','b'].values()){
    console.log(ele)
}
for(let [index,ele] of ['a','b'].entries()){
    console.log(index,ele)
}
