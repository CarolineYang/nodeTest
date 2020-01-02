//有了xml命名空间，不同的xml文档就可以混合在一起了，XHTML支持XML命名空间
//1、xml
// localName namespaceURI prefix
// isDefaultNamespace(namespaceURI) lookupNamespaceURI(prefix) lookupPrefix(namespaceURI)
//createElementNS(namespaceURI,tagName)
// document.createAttributeNS(namespaceURI,tagName);
// document.getElementsByTagNameNS(namespaceURI,tagName);
var list=document.querySelector('#list');
// list.getAttributeNS(namespaceURI,localName)

//2、其他方面的额变化 api的可靠性和完整性
//DocumentType 类型新增了三个属性 publicId、systemId和internalSubset
console.log(document.doctype.publicId,document.doctype.systemId)
var hh=list.cloneNode(true);
document.body.appendChild(hh);
//importNode 可以是外部文档节点 可以有不同的ownerDocument 这就是与cloneNode的区别 这东西一般在xml中用
var newNode=document.importNode(list,true);
document.body.appendChild(newNode);
var parentWindow=document.defaultView || document.parentWindow;
console.log(parentWindow)
//三个方法
// document.implementation.createDocumentType('html',publicId,systemId);
// document.implementation.createDocument(namespaceURI,'html',doctype);
// document.implementation.createHTMLDocument(title);//只有opera和safari支持
// if(document.body.isSupported('HTML','2.0')){
// //    执行只有DOM2级HTML才支持的操作
// }
var div1=document.createElement('div');
var div2=document.createElement('div');
div1.setAttribute('class','box');
div2.setAttribute('class','box');
console.log(div1.isSameNode(div1),div1.isSameNode(div2),div1.isEqualNode(div2));
//DOM3级加的方法 反正chrome里不识别
// div1.setUserData('name','NIc',function (operation,key,value,src,dest) {
//     if(operation==1){
//         dest.setUserData(key,value,function () {
//
//         })
//     }
// });
// var newDic=div1.cloneNode(true);
// console.log(newDic.getUserData('name'))
var iffram=document.getElementById('myframe');
var iframeDoc=iffram.contentDocument || iffram.contentWindow.document;
console.log(iframeDoc)
