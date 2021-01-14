console.log(typeof (['s',4].valueOf().toString()+5));
console.log({a:1}.valueOf().toString(),[2,3].valueOf().toString())
let a = ()=>{

}
let b = new Number(2)
console.log(typeof a,a instanceof Function,Boolean({}),typeof b)
console.log(typeof typeof typeof null);
// 1.1-隐式转换介绍
//
// · 在js中，当运算符在运算时，如果两边数据不统一，CPU就无法计算，这时我们编译器会自动将运算符两边的数据做一个数据类型转换，
// 转成一样的数据类型再计算
//
// o 这种无需程序员手动转换，而由编译器自动转换的方式就称为隐式转换
//
// · 例如1 > "0"这行代码在js中并不会报错，编译器在运算符时会先把右边的"0"转成数字0`然后在比较大小
//
// 1.2-隐式转换规则
//
// 1. 转成string类型： +（字符串连接符） 2..转成number类型：++/--(自增自减运算符) + - * / %(算术运算符) > < >= <= == != === !=== (关系运算符)
//
// 2. 转成boolean类型：!（逻辑非运算符）

console.log(1+'true',1+true,1+undefined,1+null);
//比较是转换成数字比较，但是当两边都是字符串的时候是charCodeAt()比较而非Number（）比较
console.log('2'>10,"2">"10","abc">"b","abc">"aab",NaN==NaN,undefined==null,undefined===null)
console.log(Number(undefined),Number(null),Number(false),Number(true));

console.log([]==0,![]==0,[]==![],[]==[],{}==!{},{}=={});
console.log(Object.prototype.toString.call([]) == "[object Array]")