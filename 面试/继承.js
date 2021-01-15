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
class Person{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    sayhi(){
        console.log(this.name,'hellp',this.age)
    }
}
// let a = new Person('ypp',28);
// console.log(a)
// a.sayhi()
class Child extends Person{
    constructor(name,age,color){

        super(name,age);
        super.a = 10;

        this.color = color;
    }
    sayhi() {
        console.log(this.name,this.age,this.a,super.a)
        super.sayhi();

    }
}
var b = new Child('sss',20,'red')
b.sayhi()
