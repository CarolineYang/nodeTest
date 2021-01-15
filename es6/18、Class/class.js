class Person{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    sayhi(){
        console.log('aa',this.name,'hellp',this.age)
    }
}
let a = new Person('ypp',28);
console.log(a)
a.sayhi()
class Child extends Person{
    constructor(name,age,color){
        super(name,age);
        this.color = color;
    }
    sayhi() {
        // super.sayhi();
        console.log('dd',this.name,this.age)
    }
}
let b = new Child('ypps',237,'red')
console.log(b)
b.sayhi()
