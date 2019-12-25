//文档节点Document是每个文档的根节点，
//本页面中文档节点Document只有一个子节点<html>元素，我们称之为文档元素。
//文档元素是文档的最外层元素，文档中的其他所有元素都包含在文档元素中。并且每个文档只能有一个文档元素就是只能有一个<html>
//在HTML页面中，文档元素始终都是<html>元素。在XML文件中，没有预定义的元素，所有任何元素都有可能成为文档元素
// 1、Node类型（ie的js访问不到这个node接口）
// 属性nodeType (nodeName 和 nodeValue完全取决于nodeType)  节点关系(只读) childNodes保存着一个NodeList对象(并不是Array实例)
var someNode=document.getElementById('node');
var allNode=document.getElementById('list');
var paohui=document.getElementById('paohui');
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
console.log('html',html,document.body,document.doctype,html===document.childNodes[1],document.childNodes)
//文档信息 document.title 可读可写
console.log('title',document.title)
document.title='heihei'
