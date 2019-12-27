//文档节点Document是每个文档的根节点，
//本页面中文档节点Document只有一个子节点<html>元素，我们称之为文档元素。
//文档元素是文档的最外层元素，文档中的其他所有元素都包含在文档元素中。并且每个文档只能有一个文档元素就是只能有一个<html>
//在HTML页面中，文档元素始终都是<html>元素。在XML文件中，没有预定义的元素，所有任何元素都有可能成为文档元素
// 1、Node类型（ie的js访问不到这个node接口）
// 属性nodeType (nodeName 和 nodeValue完全取决于nodeType)  节点关系(只读) childNodes保存着一个NodeList对象(并不是Array实例)
var someNode=document.getElementById('node');
var allNode=document.getElementById('allNode');
var paohui=document.getElementById('paohui');
var cl=document.getElementById('cl');
//jquery 选择器不行 这个东西是属性是js自带的  jquery 没有
// var someNode=$('#node');
// someNode.click(function () {
//     if(someNode.nodeType==Node.ELEMENT_NODE){
//         console.log('Node is an element')
//     }else{
//         console.log('Node is not an element',document.getElementById('node').nodeType)
//     }
// });
someNode.onclick=function () {
    // //IE中无效
    // if(someNode.nodeType==Node.ELEMENT_NODE){
    //     console.log('Node is an element',someNode.nodeType)
    // }else{
    //     console.log('Node is not an element',someNode.nodeType)
    // }
    //适用于所有浏览器
    if(someNode.nodeType==1){
        //元素标签名字 nodeName当nodeType为1时，nodeValue为null
        console.log('Node is an element',someNode.nodeType,someNode.nodeName,someNode.nodeValue)
    }else{
        console.log('Node is not an element',someNode.nodeType)
    }
};
if(someNode.previousSibling==null){
    console.log('first')
}
console.log(allNode.firstChild,someNode.nextSibling,someNode.previousSibling,allNode.childNodes,someNode.childNodes)
//把childNodes（虽然有length属性，但不是Array的实例，是基于DOM结构动态执行查询的结果）转换成数组
function convertToArray(nodes) {
    var array=null;
    try{
        array=Array.prototype.slice.call(nodes,0);//针对非ie浏览器
    }catch (e) {
        array=new Array();
        for(let i=0;i<node.length;i++){
            array.push(nodes[i])
        }
    }
    return array
}
//操作节点 appendChild(node)== insertBefore(node,null)第二个是参照节点  insertBefore(node,allNode.childNodes[1])
// allNode.appendChild(someNode)
// allNode.insertBefore(someNode,allNode.childNodes[10])
//只插入节点  不会移除的但是 replaceChild(someNode,allNode.lastChild)替换 节点
// 虽然第二个参数是被替换的节点并没有被移除，但是在文档中已经没有了他的位置,所以界面不显示（removeChild原理一样,依然还存在于文档中）
allNode.replaceChild(someNode,paohui)

allNode.removeChild(allNode.childNodes[4])
//所有节点共有的方法 cloneNode()  normalize()  cloneNode(true)为深克隆（儿子都在） cloneNode(false)为浅克隆
//ie下可能cloneNode()也会复制事件处理程序，所有复制前最后移除事件处理程序
var deepL=allNode.cloneNode(true);
var shallowL=allNode.cloneNode(false);
console.log(deepL.childNodes.length,shallowL.childNodes.length)

//2、Document类型
//document是HTMLDocument的实例 还有一个body属性直接指向<body>元素  documentElement属性直接指向<html>元素  doctype属性指向<!DOCTYPE>标签
var html=document.documentElement;//取得对<html>标签的引用
console.log('html',html,document.body,document.doctype,html===document.childNodes[1],document.childNodes);

//文档信息 document.title 可读可写 document.URL完整的url只是可读
// document.domain 域名可读可写，写也是不可以瞎写的，只能写子域名  www.baidu.com（紧绷的） 可以变成baidu.com（松散的）  往回设置是不行的
//document.referrer 来源页面的url 只读
console.log('title',document.title)
document.title='heihei';
console.log(document.URL,document.domain,document.referrer);

//查找元素 getElementById(id尽量不要与表单的name重名，ie好像有bug会取到表单) getElementsByTagName 返回一个HTMLCollection 有length属性，可以[3]按index数值访问(对html文件不分大小写，对xml文件分大小写)
var hh=document.getElementsByName('hh');
var li=document.getElementsByTagName('li');
var all=document.getElementsByTagName('*');
console.log('hh',hh,hh[0].innerText)
//namedItem 和[]访问的都是name为hh的第一个元素
console.log('li',li,li.namedItem('hh'),li['hh'],all);
//特殊集合  这些集合都是HTMLCollection对象
console.log(document.forms==document.getElementsByTagName('form'),document.images==document.getElementsByTagName('img'))
//虽然是false，但是内容一样，可能内存地址不一样
// document.links //包含文档中所有带href特性的a元素

//DOM一致性检测 （不一定可靠，还是要再进行能力检测）检测浏览器实现了DOM的哪些部分 DOM分为多个级别，也包含多个部分
var hasXmlDom=document.implementation.hasFeature('XML','1.0'); //两个参数，要检测的功能和版本号
console.log(hasXmlDom)

//文档写入 write() writeln() open() close() 严格XHTML文档不支持文档写入   打开和关闭网页的输出流
document.write('heiheihhhhh')
document.write('<script>console.log("testtttt")<\/script>')
// window.onload=function () {
//     document.write('heiheihhhhh');
// }

//3、Element类型 getAttribute() setAttribute()  removeAttribute()多用于自定义属性(有一小节没读完)
// ，自带属性可以直接 allNode.id  .className  .lang .title .dir获取和修改都可以直接属性

console.log(typeof cl.getAttribute('style'),typeof cl.getAttribute('onclick'))
// document.createElement('<div id="nihao">nihao</div>')
var newid=document.createElement('div');
var textNode=document.createTextNode('测试createTextNode')
newid.innerText='你好 测试createElement';
newid.id='nihao';
newid.appendChild(textNode)
document.body.appendChild(newid)
allNode.firstChild.nodeValue='<p>let her go</p>'
console.log(allNode.firstChild.nodeName,allNode.firstChild.nodeValue==allNode.firstChild.data)

//4、Text类型 没有子节点 nodeValue==data
// 创建文本节点 createTextNode
var textNode1=document.createTextNode('测试createTextNode');
//规范化文本节点 normalize()
newid.appendChild(textNode1)
newid.appendChild(textNode1)
console.log(newid.childNodes.length)
newid.normalize();
console.log(newid.childNodes.length)
//分割文本节点 splitText()
var textNode2=newid.firstChild.splitText(5)
console.log(newid.firstChild.nodeValue,newid.childNodes.length)

//5、Comment类型  nodeType为8 nodeName为#comment nodeValue就是注释的内容 没有子节点 父节点可能是Document或者Element
//一切功能和Text类型相似，除了没有这个splitText()方法
var comment=document.createComment('a comment');
newid.appendChild(comment);
console.log(comment.data,document.body.childNodes[1].data)

//6、CDATATSection类型 只针对XML文档，表示的是CDATA区域。用法和属性都与Comment相似继承于Text类型，没有splitText()方法
//nodeType 4 nodeName #cdata-section nodeValue为CDATA区域中的内容 没有子节点 父节点可能是Document或者Element
// var cdata=document.createCDATASection('CDATA');
// newid.appendChild(cdata);
//append之后报错报错 浏览器无法解析CDATASection节点 只能用在xml文档中

//7、DocumentType类型  不常用包含文档的doctype相关信息 nodeType 10 nodeName为doctype的名称 nodeValue null 没有子节点 父节点是Document
//3个属性
console.log(document.doctype.name,document.doctype.entities,document.doctype.notations)

//8、DocumentFragment类型 在文档中没有对应标记，，是一种轻量级文档，可以包含和控制节点，但不会像完整的文档那样占用额外的资源
// nodetype 11 nodeName #document-fragment nodeValue null 没有父节点 子节点可以是EL们提 COmment Text CDATASection。。  继承了Node的所有方法，通常用于执行哪些针对文档的Dom操作
var fragment=document.createDocumentFragment();
//创建文档片段 作为仓库来使用 在里面保存将来可能添加到文档中的节点（因为不能把文档片段直接添加到文档中）
var lists=null;
for(var i=0;i<3;i++){
    lists=document.createElement('li');
    lists.appendChild(document.createTextNode('item'+(i+1)));
    fragment.appendChild(lists)
    // allNode.appendChild(lists)
}
allNode.appendChild(fragment)
//避免多次渲染 dom树

//9、Attr类型 表示元素的特性 Attr对象3个属性name value specified（布尔值，区别特性是在代码中指定的还是默认的） 尽管是节点，但是不被认为是DOM文档树的一部分
//nodeType 11 nodeName就是特性的名称  nodeValue就是特性的值 parentNode null 没有子节点（在html中） 在xml中子节点可以是Text或者EntityReference
var attr=document.createAttribute('align');
attr.value='left';
someNode.setAttributeNode(attr)
console.log(someNode.attributes['align'].value,someNode.getAttribute('align'),someNode.getAttributeNode('align'))


