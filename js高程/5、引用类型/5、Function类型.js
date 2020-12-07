//函数声明语义法定义
function sum(num1,num2) {
    return num1+num2
}
//变量定义
var sum2 = function (num1,num2) {
    return num1+num2
};
//s使用构造函数Function定义
var sum3 = new Function('num1','num2','return num2+num1');

console.log(add(1,2))
// console.log(adda(1,2))  //报错
function add(a,b) {
    return a+b
}
var adda =function (a,b) {
    return a+b
};


//消除耦合现象 使用arguments.callee
function f(num) {
    if(num<1){
        return 1;
    }else{
        return num*arguments.callee(num-1);
    }
}
var hs = f;
f = function () {
    return 0;
}
console.log(hs(5),f(5));
window.color = 'red';
var o = {
    color:'blue'
};
function sayC() {
    console.log(this.color)
}
sayC(); //red
o.sayC = sayC;
o.sayC(); //blue
sayC.call(this);
sayC.call(window);
//使用call来扩充作用域的最大好处就是对象不需要和方法有任何耦合关系
sayC.call(o);
//bind是穿件一个函数的实例，其this指向o；相当于是新建了个函数
var kk = sayC.bind(o);
kk();
function outer() {
    console.log('ss')
    inner();
}
function inner() {
    console.log(inner.caller)
}
outer();
function ss(num1,num2) {
    return num1+num2;
}
function callSS(num1,num2) {
    return ss.apply(this.arguments);
}
function callSS1(num1,num2) {
    return ss.apply(this,[num1,num2])
}
function callSS2(num1,num2) {
    //传参方式不一样
    return ss.call(this,num1,num2)
}
console.log(callSS(10,20),callSS1(10,20),callSS2(10,20))
