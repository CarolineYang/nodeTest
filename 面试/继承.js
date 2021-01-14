function P() {
    this.a =10;
}
function pp() {
    this.b = [1,2]
}
pp.prototype = new P();
var a = new pp();
var b = new pp();
a.a =20;
a.b.push(1)
console.log(b.a,a.a,a.b,b.b)
