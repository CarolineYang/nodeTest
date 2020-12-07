// 1、全局作用域 window其实就是es里的global
//必须在浏览器环境下运行所有建立了html文件

var age=20;
function sayAge() {
    console.log(this.age)
}
window.c=33
console.log(window.age)
sayAge();
delete window.c;
delete window.age;
delete age;
console.log(window.age,window.c)
// //报错因为oldv未定义
// var newv=oldv;
// //不报错，因为这是一次属性查询
// var newv=window.oldv;

console.log('s5',window.frames[0])
//3、窗口位置 screenX screenLeft screenTop
// moveTo(200,300)移动到  moveBy(50,0)向右移动50px 最好别用这俩方法opera ie7默认是禁用的 chrome里好像也是禁用的
console.log('wei',window.screenX,window.screenLeft)
var left=(typeof window.screenLeft == 'number')?window.screenLeft:window.screenX;
window.moveTo(200,200);
window.moveBy(-200,0);

//4、窗口大小 innerWidth outerWidth
//页面视口大小 innerHeight
//两个方法 有些浏览器就是禁用的 resizeTo(100,100)  resizeBy(100,50)
console.log('size',window.innerHeight,window.outerHeight,document.documentElement.clientHeight)
window.resizeTo(200,100);
// 5、导航和打开窗口
//因为弹窗的安全限制 他会被浏览器拦击打不开的，好像只剩下用户手动点击弹开弹窗 这个因浏览器不一样
// window.open('https://www.baidu.com','_blank','height=400,width=200')
//不打开新窗口的情况下会忽略第三个参数
$('#hh').click(function () {
    var hhs=window.open('https://www.baidu.com','_blank','height=400,width=500,resizable=no')
    // //关闭方法
    // hhs.close()
    hhs.resizeTo(100,100);
    hhs.moveTo(200,200);
    //   弹出窗口有一个指针指向打开它的原始窗口 把opener设置成null就是切断标签页之间的联系，并且没有办法恢复
    console.log(hhs.opener==window)
});
//6、setTimeOut和setInterval
var times=setTimeout(function () {
    alert('hell')
},1000);
clearTimeout(times);
let num=0;
let inter=setInterval(function () {
    num++;
    console.log(num)
    if(num==10){
        clearInterval(inter)
    }
},500)
//7、系统对话框  alert() confirm() prompt() 外观由浏览器和操作系统决定，与css无关
confirm('a?');
// if(confirm('a?')){
//     alert('yes')
// }else{
//     alert('no')
// }
var res=prompt('whats ur name?','')
if(res!=null){
    alert('welcome'+res)
}
// window.print();
// //在chrome里没生效
window.find();

