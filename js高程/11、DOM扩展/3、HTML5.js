// 以前的html主要是用于定义标记，与js有关的一概交由DOM规范去定义
// h5主要围绕如何使用新增标记定义了大量js API，其中一些API和DOM重叠，定义了浏览器应该支持的DOM扩展
// 1、与类相关的扩充 getElementsByClassName()方法和classList属性 及其四个方法 add() remove() contains() toggle()有就删除，没有就添加上去
var hh=document.getElementsByClassName('hh hh1');
console.log(hh,hh[0].classList);
// 返回一个HTMLCollection 有length属性 通过【index】访问具体元素
// classList
hh[0].classList.add('add');
// hh[0].classList.remove('add');
hh[0].classList.toggle('heihei');
console.log(hh[0].classList.contains('add'));
// $('#ee').attr('class')
$('#ee').removeClass('add');
$('#ee').addClass('add');
// 2、焦点管理
// 刚加载完成时的是body获取了焦点
console.log(document.activeElement);
var button=document.getElementById('mybutton');
button.focus();
console.log(document.hasFocus(),document.activeElement==button);
// 3、HTMLDocument readyState属性 兼容模式document.compatMode
if(document.readyState=="complete"){
//    检测文档是否加载完成  不是complete就是loading 只可能有着两个值
}
// 渲染页面模式的标准的还是混杂的
if(document.compatMode=="CSS1Compat"){
//    标准模式
    console.log(1)
}else{
//   BackCompat  混杂模式
    console.log(2)
}
var head=document.head || document.getElementsByTagName('head')[0];
// 4、字符集属性 document.charset可读可写
console.log(document.charset);
document.charset='UTF-8';
//5、自定义数据属性 dataset
var ee=document.getElementById('ee');
console.log(ee.dataset.name)
//6、插入标记
// innerHTML(调用元素的所有子节点)和outerHTML（包含调用元素自己及其所有子节点） 不允许插入script和style元素并且执行他的脚本
//insertAdjacentHTML()
var content=document.getElementById('content');
console.log(content.innerHTML)
// content.innerHTML='>>>><b>heihei</b>';
//DOM树重绘进行替换
// content.innerHTML='<input type="hidden"><script type="text/javascript" defer>console.log(0);<\/script>';
content.innerHTML="<input type=\"hidden\"><style type='text/css'>body{color:red;}</style>";
//不是所有元素都支持这个属性的。col head html style table tfoot tr tbody 都不支持innerHTML属性
//使用这个属性从外部插入html要小心一点，应该用可靠的方式处理html。 window.toStaticHTML()方法 --从源html中删除所有脚本节点和事件处理程序属性。
var text='<a onclick="alert(1)" href="">click me</a>';
// var sani=window.toStaticHTML(text);
// //只有ie8的方法 chrome不支持
// console.log(sani)
console.log(content.outerHTML)
// content.outerHTML='<span>gg</span>'
content.insertAdjacentHTML('beforebegin','<p>hello </p>'); //作为前一个同辈元素插入
content.insertAdjacentHTML('afterbegin','<p>hello </p>');//作为弟一个子元素插入
content.insertAdjacentHTML('beforeend','<p>hello </p>');//作为最后一个子元素插入
content.insertAdjacentHTML('afterend','<p>hello </p>');//作为后一个同辈元素插入
//7、scrollIntoView()方法
//可以在所有HTML元素上调用，通过滚动浏览器窗口，调用元素就可以出现在视口 参数传true或者false或者不传  不传和true一样都是窗口滚动以后会让调用元素的顶部与视口顶部尽可能齐平
//false 的话 调用元素可能出现在视口中，不过顶部不一定齐平

document.getElementsByTagName('h1')[0].scrollIntoView();
//支持这个的浏览器 ie firefox safari opera
