// 1、原型链
function A() {
   this.color = 'red';
   this.list = ['a','b']
}
A.prototype.getColor = function () {
    return this.color;
};
function AA() {
    this.color = 'green';
}
AA.prototype = new A();
A.prototype.getColor = function () {
    console.log('aa')
    return this.color;
};
var a = new AA();
var b = new AA();
a.list.push('c');
//两个实例此时公用了一个数组 不好，因为此时相当于就在AA的原型上的属性，自然是共享的 弊端 所以很少单独使用原型链继承
console.log(a.getColor(),a.list,b.list);

// 2、借用构造函数 只能继承实例 不能继承原型属性
function B(name) {
    this.list = ['a','b'];
    this.name = name;
}
B.sayName = function () {
    console.log('sjj')
};
function BB() {
    B.call(this,'Nicholas');
}
var b = new BB();
var c = new BB();
b.list.push('c');
console.log(b.list,c.list,c.name);
// c.sayName();  没有该方法
// 3、组合继承 原型链和借用构造函数的结合体
function C(name) {
    this.name = name;
    this.list = ['a','b']
}
C.prototype.sayName = function () {
    console.log(this.name);
}
function CC(name,age) {
    C.call(this,name);
    this.age = age;
}
CC.prototype = new C();
CC.prototype.sayAge = function () {
    console.log(this.age)
};
var cc = new CC('ypp',25);
var cc2 = new CC('dd',28);
cc.list.push('c');
console.log(cc.list,cc2.list);
cc.sayAge();
cc.sayName();
cc2.sayAge();
cc2.sayName();

// 4、原型式继承  与Object.create()相似 可以替换  这样引用类型值是共享的
function object(o) {
    function F1() {

    }
    F1.prototype = o;
    return new F1();
}
var person = {
    name:'ypp',
    list: [1,2]
};
var per1 = object(person);
var per2 = object(person);
per1.name = 'js';
per2.name = 'jsa';
per1.list.push(3);
per2.list.push(34);
console.log(person,per1.list);

// 5、寄生式继承
function createA(o) {
    var clone = object(o);
    clone.sayHi = function () {
        console.log('hi');
    };
    return clone;
}
var peso = {
    name:'nicholas',
    list:[1,2]
}
var ap = createA(peso);
var ap2 = createA(peso);
ap.sayHi();
ap.list.push('3');
console.log(ap.list,ap2.list);

//6、寄生组合式继承
function inheritPrototype(subset,superset) {
    var prototype = object(superset.prototype);
    prototype.constructor = subset;
    subset.prototype = prototype;
}
function Superset(name) {
    this.name = name;
}
Superset.prototype.sayName = function () {
    console.log(this.name)
}
function Subset(name) {
    Superset.call(this,name);
}
// Subset.prototype = new Superset()
inheritPrototype(Subset,Superset);
var pp = new Subset('nic');
pp.sayName();
