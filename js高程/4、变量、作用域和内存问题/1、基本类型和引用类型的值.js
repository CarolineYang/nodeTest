function setName(obj) {
    obj.name = 'ypp';
    obj = new Object();
    obj.name = 'haha';
}
var person = new Object();
setName(person);
console.log(person.name);
let a = '5',b=5,c=true,d = null,e = {},f,g=[];
console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f,typeof setName,typeof g);
console.log(g instanceof Array,e instanceof Object);
var color = 'blue';
function getColor() {
    let color = 'red';
    return color;
}
let col = getColor();
console.log(col);
