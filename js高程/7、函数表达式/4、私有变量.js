// 1、静态私有变量
(function () {
    //私有变量和函数
    var privateChannel = 10;
    function privateF(value) {
        privateChannel = value;
        return false;
    }
    // 构造函数
    myObject = function () {

    }
    //共有/特权方法
    myObject.prototype.getPublicMethod = function (value) {
        return privateChannel;
    }
    myObject.prototype.publicMethod = function (value) {
        privateChannel++;
        return privateF(value);
    }
})();
var p = new myObject();
var p2 = new myObject();
p.publicMethod(20);
console.log(p.getPublicMethod(),p2.getPublicMethod());

//2、模块模式
var single = {
    name:'ypp',
    method:{

    }
};
var singleton = function () {
    //私有变量和私有函数
    var name = ['ypp'];
    function hh() {
       return false;
    }
    //公共办法
    return{
        name:name,
        getName:function () {
            return name
        },
        setName:function (val) {
            name.push(val)
        }

    }
};
var sing = new singleton();
sing.setName('caroline');
console.log(sing.getName());
//3、增强的模块模式
var singleton2 = function () {
    //私有变量和私有函数
    var name = ['ypp'];
    function hh() {
        return false;
    }
    //创建一个对象
    var oo = new Object();
    //添加共有的属性和方法 特权
    oo.getName = function () {
        return name
    };
    oo.setName = function (val) {
        name.push(val)
    };
    //公共
    return oo;
}();
// var sin = new singleton2();
console.log(singleton2.getName());
