// 1、动态脚本
var script=document.createElement('script');
script.type='text/javascript';
// script.src='test.js'; //第一种加载方式

script.appendChild(document.createTextNode('function sayHi(){alert("hi")}')) //第二种
document.body.appendChild(script)
sayHi();
//ie中访问不到sayhi 因为ie中将script视为特殊元素，不允许DOM访问其子节点，可以通过script.text赋值
var code="function sayHi(){alert('hi')}";
function laodScript(code) {
    var script=document.createElement('script');
    script.type='text/javascript';
    try{
        script.appendChild(document.createTextNode(code))
    }catch (e) {
        //在ie中
        script.text=code;
    }
    document.body.appendChild(script)
}
//loadScript 适合所有浏览器

//2、动态样式
var link=document.createElement('link');
link.rel='stylesheet';
link.type='text/css';
link.href='style.css';
var head=document.getElementsByTagName('head')[0];
head.appendChild(link);

var style=document.createElement('style');
style.type='text/css';
style.appendChild(document.createTextNode('body{color:green;}'))
head.appendChild(style)
//ie 中报错 style为特殊元素 DOM不能访问其子节点 只能通过styel.styleSheet.cssText 最好少用这个属性，在重用同一个style元素并再次设置这个属性时，可能会导致浏览器崩溃。ie的bug
function loadCss() {
    var style=document.createElement('style');
    style.type='text/css';
    try {
        style.appendChild(document.createTextNode('body{color:green;}'))
    }catch (e) {
        style.styleSheet.cssText='body{color:green;}'
    }
    head.appendChild(style)
}

//3、操作表格 特意为生成表格设置了一些方法  看看就好
var table=document.createElement('table');
table.border=1;
table.width='100%';
var tbody=document.createElement('tbody');
table.appendChild(tbody);
tbody.insertRow(0);
tbody.rows[0].insertCell(0);
tbody.rows[0].cells[0].appendChild(document.createTextNode('cell 1.1'))
tbody.rows[0].insertCell(1);
tbody.rows[0].cells[1].appendChild(document.createTextNode('cell 1.2'))
tbody.insertRow(1);
tbody.rows[1].insertCell(0);
tbody.rows[1].cells[0].appendChild(document.createTextNode('cell 2.1'))
tbody.rows[1].insertCell(1);
tbody.rows[1].cells[1].appendChild(document.createTextNode('cell 2.2'))
document.body.appendChild(table);

//4、使用Nodelist  HTMLCollection NamedNodeMap 都是三个动态的集合，当文档结构发生变化，他们都会更新。
var divs=document.getElementsByTagName('div');
// for(var i=0;i<divs.length;i++){
//     var div=document.createElement('div');
//     document.body.appendChild(div)
// //    每渲染一次 divs的值变化一次
// }
//会死循环 因为divs。length一直在涨 这循环永远结束不了
let len=divs.length
for(var i=0;i<len;i++){
    var div=document.createElement('div');
    document.body.appendChild(div)
//    每渲染一次 divs的值变化一次
}
//这样可以避免死循环 哈哈 因为把length存储起来了

//尽量少访问NodeList ，因为每次访问都会运行一次基于文档的查询。可以考虑将从NodeList中取出来的值缓存起来。
