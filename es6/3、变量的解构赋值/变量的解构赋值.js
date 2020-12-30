let x = 10,y = 20;
[x,y]=[y,x];
console.log(x,y)
function f() {
return [1,2,4]
}
let [a,b,c] = f();
console.log(a,b,c);
function aa([x,y,z]){
    console.log(x+y+z);
}
aa([1,2,3]);
var bb = {
    name:'ypp',
    age:27
};
let {name,age} = bb;
console.log(name,age);
let ss = new Map();
ss.set('first','ypp');
ss.set('second','ypp2');
for(let [key,value] of ss){
    console.log(key+ ' is '+value)
}
// const {getAge,getName} = require('aa');
import {getAge,getName} from './aa.js'
getName(bb);
getAge(bb);