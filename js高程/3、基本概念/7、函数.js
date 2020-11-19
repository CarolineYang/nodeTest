function sayHi(name,message) {
    document.write('Hello '+name+','+message)
    // console.log('Hello '+name+','+message)
}
sayHi('Nicholas','how are you today?')
function sayHi1() {
    document.write('Hello '+arguments[0]+','+arguments[1]+'参数的长度为'+arguments.length)
    // console.log('Hello '+name+','+message)
}
sayHi1('Micale','how are you today?')
function doAdd(num1,num2) {
    //arguments与参数保持一致 此时num2也变成了10
    arguments[1]=10;
    console.log(arguments[0]+num2)
}
doAdd(10,20);
//不能重载
function f() {
  console.log('第一个')
}
function f() {
    console.log('第2个')
}
f();
