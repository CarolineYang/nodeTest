//1、querySelector() 只返回符合条件的第一个元素
var hh=document.querySelector('.hh');
var hhp=document.querySelector('p.hh');//选取class为hh的p标签
console.log(hh.innerHTML,hhp)
//2、querySelectorAll() 返回一个NodeList 有length属性，通过index【】访问
var hhAll=document.querySelectorAll('.hh');
var pAlldiv=document.querySelectorAll('div span');//div下面的所有span 就是儿子 不间隔别的标签就能查出来 p不能包含div 会解析成两个p js查询的时候会出错
console.log(hhAll,hhAll[1],pAlldiv,$('p').find('span'))
$('div').find('span').each(function () {
    console.log($(this).text())
});
//3、matchesSelector() 返回布尔值 检测她是否被querySelector()或者 querySelectorAll()方法返回 各个浏览器写法不一样
// 不兼容几乎不咋用有些浏览器还不支持 要用最好搞个包装函数
console.log(document.body.webkitMatchesSelector('.hh'))
