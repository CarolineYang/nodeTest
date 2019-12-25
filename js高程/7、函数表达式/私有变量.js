function MyObject(name) {
    //私有变量和私有方法
    let age=20;
    function sayHi() {
        console.log('hi')
        return false;
    }
    //特权方法(闭包)
    this.publicMethods=function () {
        age++;
        return sayHi();
    }
    this.getName=function () {
        return name
    };
    this.setName=function (vals) {
        // console.log(this)
        name=vals;
    }
}
var person=new MyObject('ypp');
var person1=new MyObject('ypp2');
// console.log(person.publicMethods())
// console.log(person.getName());
// person.setName('caroline')
// console.log(person.getName(),person1.getName())
//私有变量不共享  这里使用的是实例变量 如何让私有变量共享呢？

// 使用静态私有变量（通过私有作用域中定义私有变量或者函数）

(function () {
    let name='';
    // function sayhi() {
    //     console.log('hi')
    // }
    Person=function (val) {
       name=val;
    }
    //特权方法
    Person.prototype.getName=function () {
        return name
    }
    Person.prototype.setName=function (val) {
        name=val;
    }
})();
var per=new Person('ceshi1');
console.log(per.getName())
per.setName('ceshi2');
console.log(per.getName())
var per2=new Person('????');
console.log(per2.getName())
console.log(per.getName())
//共享私有变量了 以上全是为了用于自定义类型创建私有变量和特权方法的

//模块模式 则是为单例创建私有变量和特权方法（单例指的就是只有一个实例的对象）
function Clas(){

}
Clas.prototype.sayHis=function(){
    console.log('sayhi')
}
var singleTon=function () {
    //私有变量和私有函数
    var age=10;
    function f() {
        return 'ffff'
    }

    age++;
    var hh=new Array('blue','red')
    // return{
    //     f:f,
    //     age:age,
    //     hh:hh
    // }
    var app=new Clas();
    app.publicMethod=function () {
        // console.log(age,hh)
        return f();
    }
    return app
}();
//实际上这个对象字面量定义的是单例的公共接口，这种模式在需要对单例进行某些初始化，同时又需要维护其私有变量是非常有用的
// singleTon.age++;
singleTon.sayHis()
console.log(singleTon.publicMethod())
