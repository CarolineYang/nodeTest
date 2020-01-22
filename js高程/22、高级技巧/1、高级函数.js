function f() {
    var a=18;
    return function () {
        console.log(a)
    }
}
var k=f();
console.log(k.toString(),JSON)
k();
// 1、安全的类型检测
//检测是JSON数据还是我们原生的数组
function isArray(value) {
    return Object.prototype.toString.call(value)=="[Object Array]"
}
//2、作用域安全的构造函数
function Person(name,age) {
    if(this instanceof Person){
        this.name=name;
        this.age=age;
    }else{
        return new Person(name,age)
    }

}
function Persons(name,age) {
    Person.call(this,name,age);
    this.sayHi=function () {
        console.log('???',this.name)
    }
}
Persons.prototype=new Person();
var per=Person('nic',20);
var pers=new Persons('ypp',30);
pers.sayHi()
console.log('s',window.name,per.name,pers)
//3、惰性载入函数 表示函数执行的分支仅会发生一次  两种方法
function createXHR() {
    if(typeof XMLHttpRequest!='undefined'){
        createXHR=function () {
            return new XMLHttpRequest();
        }
    }else if(typeof ActiveXObject!='undefined'){
        createXHR=function () {
            if(typeof arguments.callee.activeXString!='undefined'){
                var versions=['MSXML2.XMLHttp.6.0','MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'];
                for(let i=0;i<versions.length;i++){
                    try{
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString=versions[i];
                        break;
                    }catch (e) {

                    }
                }
            }
        }

    }else{
        createXHR=function (){
            throw new Error('No XHR object available.');
        }
    }
}
var createXHR=(function () {
    if(typeof XMLHttpRequest!='undefined'){
        return function () {
            return new XMLHttpRequest();
        }
    }else if(typeof ActiveXObject!='undefined'){
        return function () {
            if(typeof arguments.callee.activeXString!='undefined'){
                var versions=['MSXML2.XMLHttp.6.0','MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'];
                for(let i=0;i<versions.length;i++){
                    try{
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString=versions[i];
                        break;
                    }catch (e) {

                    }
                }
            }
        }

    }else{
        return function (){
            throw new Error('No XHR object available.');
        }
    }
})();
//4、函数绑定 将函数绑定到指定环境
var hand={
    mes:'nihao',
    handle:function (event) {
        console.log(this.mes,this)
    }
};
var btn=document.getElementById('btn');
btn.addEventListener('click',hand.handle)
btn.addEventListener('click',function () {
    hand.handle()
});
btn.addEventListener('click',hand.handle.bind(hand))
//手写bind函数  里面返回个闭包 饭后吧this指针指向环境上下文context
function bind(fn,context) {
    return function () {
        //arguments是传入fn函数的参数，并非bind的参数
        return fn.apply(context,arguments)
    }
}
btn.addEventListener('click',bind(hand.handle,hand));
//5、函数柯里化 用于创建已经设置好了一个或者多个参数的函数
function add(num1,num2) {
    return num1+num2;
}
function curriedAdd(num2) {
    return add(5,num2)
}
console.log(add(2,3))
console.log(curriedAdd(3))
function curry(fn) {
    var args=Array.prototype.slice.call(arguments,1);
    return function () {
        var innerArgs=Array.prototype.slice.call(arguments);
        var finalArgs=args.concat(innerArgs);
        return fn.apply(null,finalArgs)
    }
}
var cur=curry(add,5);
var cu=curry(add,5,7);
console.log(cur(8),cu(3))


