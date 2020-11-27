// 1、工厂模式 没有解决对象识别的问题（）
function person(name,age) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.sayhi = function () {
        console.log('hello '+this.name);
    };
    return o;
}
var p1 = person('ypp',25);
var p2 = person('ypp2',55);
p1.sayhi();
p2.sayhi();
// 2、构造函数模式
function Person(name,age) {
    this.name = name;
    this.age = age;
    this.sayHi = function () {
        console.log('sayhi ' + this.age)
    };
    this.sayHi2 = sayhi2;
}
var pp1 = new Person('ypp',25);
var pp2 = new Person('yss',39);
pp1.sayHi();
pp2.sayHi();
console.log(pp1.constructor == Person,pp2.constructor == Person);
console.log(pp1 instanceof Object,pp1 instanceof Person);
//其实此处pp1 和pp2的sayhi是两个不同的函数在内存中。这样有些浪费。我们可以把它提出来搞成同一个函数， 看sayhi2,但是这样搞很多全局变量的函数也很烦哦，不太合适，
// 说是权不变了的sayhi2实际上只有这个构造函数可以使用
function sayhi2() {
    console.log('sayhi ' + this.name)
};
pp1.sayHi2();
pp2.sayHi2();

//3、原型模式
function Person1() {
//    这里一般是公共属性，原型里一般写特异性属性和函数类的操作
    this.age = 20;
}
Person1.prototype.name = 'Caroline';
Person1.prototype.sayHi = function () {
    console.log('hello '+this.name);
};
var per1 = new Person1();
var per2 = new Person1();
console.log(per1.name);
per1.sayHi();
per1.name = 'upp';
per1.sayHi();
per2.sayHi();
//hasOwnProperty只能检测实例中的属性，原型中的检测不到  in操作符无论该属性存在于实例还是原型中，只要有都返回true
console.log(per1.hasOwnProperty('name'),per2.hasOwnProperty('name'),'name' in per2,per1.hasOwnProperty('age'),per2.hasOwnProperty('age'),)
delete per1.name;
per1.sayHi();
//Object.keys返回一个包含所有可枚举属性的字符串数组  Object.getOwnPropertyNames返回所有实例属性
console.log(Object.keys(per1),Object.keys(Person1.prototype),Object.getOwnPropertyNames(Person1.prototype));


function PP() {

}
var fri  = new PP();
PP.prototype = {
    name : 'aa',
    age:[1,2],
    sayHi:function () {
        console.log('sayhi' + this.name)
    }
};
var fri2 = new PP();
var fri3 = new PP();
//报错，因为fri中找不到这个方法。这样重写原型会使他失去动态联动性，但是他之后定义的实例依然可以访问这些属性
// fri.sayHi();
console.log(fri.name,fri2.name);  //undefined aa
PP.prototype.sayHi();
// console.log(Object.getOwnPropertyNames(Array.prototype))
fri2.age.push(3);
console.log(fri2.age,fri3.age);
//弊端 对于引用数据类型的属性，所有实例共享一个属性？这样不太好吧，所以很少有人单独使用原型模式

//4、组合使用构造函数和原型模式
function PPP(name,age) {
    this.name = name;
    this.age = age;
    this.friend = ['a','b'];
}
//一般方法（函数）写在原型里  剩下的属性写在构造函数中
PPP.prototype = {
    constructor:PPP,
    sayName:function () {
        console.log(this.name)
    }
};
var ppp1 = new PPP('ypp',24);
var ppp2 = new PPP('cdd',25);
ppp1.friend.push('c');
console.log(ppp1.friend,ppp2.friend,ppp1.sayName === ppp2.sayName);


//5、动态原型模式
function AA(name) {
    this.name = name;
    //这代码只会在初次调用AA时执行
    if(typeof this.sayName != "function"){
        AA.prototype.sayName = function () {
            console.log('你的名字'+this.name)
        };
        //以下方式不可以 会切断现有实例与新原型的联系
        // AA.prototype = {
        //     sayName:function () {
        //         console.log('你的名字shi'+this.name)
        //     }
        // }
    }
}
var ff = new AA('ypp');
ff.sayName();

// 6、寄生构造函数模式 返回的对象与构造函数及其原型无任何关系 所以不能用instanceof
function PA(name) {
    var  o = new Object();
    o.name = name;
    o.sayHi = function () {
        console.log('ass',this.name)
    };
    return o;
}
var friend = new PA('sss');
var friend2 = PA('sss');  //工厂模式啊这就是
friend.sayHi();
friend2.sayHi();

// 7、稳妥构造函数模式
function PPA(name) {
    var o = new Object();
    o.name = name;
    o.sayHi = function () {
        console.log(name)
    }
    return o;
}
var ppa = PPA('ypp');
ppa.sayHi();
//除了sayHi 其他的没办法访问到传入的初始name
var a = [];
a.reverse();
