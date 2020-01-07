var ad=document.getElementById('a');
// console.log(ad.innerText)
//try catch 语句
//1、try-catch语句
//finally语句
try{
    console.log(ad.innerText)
}catch (e) {
    // throw new Error(e)
    console.log(e,e.message)
}finally {
    console.log('hhh')
}
//无论有错无措只要有finally语句 这个都会执行的
//错误类型 7种 Error EvalError EvalError ReferenceError SyntaxError（语法错误） TypeError URIError（encodeURI()和decodeURI()传入URL格式不正确）
//其中Error是基类型，其他错误类型都继承自该类型，所有所有错误共享属性
//EvalError
// new eval();
// RangeError 会在数值超出相应范围时触发
// new Array(-10)
// ReferenceError 找不到对象的情况下 访问不存在的变量下  var obj=x； x未声明
// TypeError 在变量中保存着意外的类型，或者访问不存在的方法时，这是常遇到的错误
try{
    somefunction();
    // new Array(-10)
    // var b=x;
}catch (e) {
    if(e instanceof TypeError){
        console.log('type error')
    }else if(e instanceof ReferenceError){
        console.log('reference Error')
    }else if(e instanceof RangeError){
        console.log('RangeError error')
    }else if(e instanceof EvalError){
        console.log('EvalError error')
    }else{
        console.log('other error')
    }
}
//2、抛出错误
try{
    console.log(ad.innerText)
}catch (e) {
    //throw 操作符 指定一个值 遇到throw操作符时，代码会立刻停止执行，仅当有try-catch语句捕获到被抛出的值时，代码才会继续执行
    // throw 'sss'
    // throw new Error(e)
    // throw new ReferenceError('aaaaaffffffff')
    // throw new CustomError('new mmm')
    console.log('aaaaaaaaaa')
}
//自定义错误类型
function CustomError(mes) {
    this.message=mes;
    this.name="CustomError"
}
CustomError.prototype=new Error();
//错误抛出时机
function process(values) {
    if(!(values instanceof Array)){
        throw new Error('values must be an array')
    }
    return values.sort((a,b)=>a-b)
}
//3、错误处理事件 error 没有通过try-catch处理的错误会触发window对象的error事件 必须遵循DOM0级事件 不能用addEventListenerDOM2事件
// console.log(ad.innerText)
window.onerror=function (message,url,line) {
    console.log('errrrrrr');
    //目的是阻止浏览器报告错误的行为，但是并没有 而且图像行为书上说会触发 但是也没有触发onerror事件
    return false;
};
// console.log(ad.innerText)
var img=new Image();
img.src='23.jpg'
//只要发生错误，无论是不是浏览器生成的，都会触发这个事件
//5、常见的错误类型  类型转换错误 数据类型错误 通信错误ajax
function concat(str1,str2,str3) {
    var  res=str1+str2;
    // if(str3){} 这种就是类型转换错误是万万不行的 因为0也被解析为false
    //在流控制语句中使用布尔值作为条件很容易导致类型转换错误
    if(typeof str3=='string'){
        res+=str3;
    }
    return res
}
//基本类型的值用typeof 对象的值用instanceof检测
//7、把错误记录到服务器
function logError(sev,msg) {
    var img=new Image();
    img.src="log.php?sev="+encodeURIComponent(sev)+'&msg='+encodeURIComponent(msg);
}
for(let i=0;i<modes.length;i++){
    try{
        modes[i].init()
    }catch (e) {
        logError('nonfatal','Module init failed:'+e.message)
    }
}
