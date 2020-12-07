var col = new Array(10).fill(22);
var c = new Array('sh');
c[12]='ss';
var color = ['red','green']
console.log(col,c,color.toString(),color.toLocaleString(),color.valueOf(),color.join(''));
var a = {
    age:18
};
var b = {
    age:20
};
var c = {
    age:17
};
var hh = [a,b,c];
hh = hh.sort((a,b)=>{
    return a.age-b.age
});
console.log(hh);
var hhs = [1,2];
let ff = hhs.concat(['s',[5,6]]);
console.log(ff);

var arr = [1,2,3,5,7,3,2,5,4,6];
let cc = arr.some((item,index,array)=>{
    return item>2
});
let dd = arr.every((item,index,array)=>{
    return item>2
});
let ee = arr.filter((item,index,array)=>{
    return item>2
});
let ffs = arr.map((item,index,array)=>{
    return item*2
});
console.log(cc,dd,ee,ffs,arr);

let sumer = arr.reduce((prev,next,index,array)=>{
   console.log(prev,next);
    return prev+next
});
console.log(sumer);
