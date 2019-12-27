console.log(document.documentMode);
//说是document.documentMode属性可以知道页面用的什么文档模式 但是chrome是undefined
//1、文档模式 决定你可以使用哪个级别的css，可以在js里使用那些api以及如何对待文档类型
var list = document.getElementById('list');
//<meta http-equiv="X-UA-Compatible" content="IE=7">
//可以强制浏览器以某种模式渲染页面，主要是content=

//2、children属性 是HTMLCollection的实例 只包含元素中同样是元素的子节点  不包含text类型的文本节点(空白)
console.log(list.children,list.childNodes);

//3、contains() 方法 判别某个节点是否是另一个节点的后代的 返回布尔值 ie firefox9 safari opera chrome
//compareDocumentPosition()
console.log(document.documentElement.contains(document.body))
function contain(refNode,otherNode) {
    if(typeof refNode.contains()=='function'){
        return refNode.contains(otherNode)
    }else if(typeof refNode.compareDocumentPosition(otherNode) == 'function'){
        return !!(refNode.compareDocumentPosition(otherNode) & 16)
    }else{
        var node=otherNode.parentNode;
        do{
            if(node==refNode){
                return true;
            }else{
                node=node.parentNode;
            }
        }while(node!==null);
        return false

    }
}

//4、插入文本 innerText outerText 不解析html标签 支持的浏览器有 ie4 safari3 opera8 chrome
//firefox不支持，但是有类似的属性，textContent 是DOM3的一个属性 为确保兼容
function getInnerText(element) {
    return (typeof element.textContent=="string")?element.textContent:element.innerText;
}
function setInnerText(element,text) {
    if(typeof element.textContent=='string'){
        element.textContent=text;
    }else{
        element.innerText=text;
    }
}
//实际上innerText会忽略行内样式和脚本，但是textContent不会。所有用的时候主要尽量从不包含行内样式和脚本的DOM子树中读取片段
//outerText 和outerHTML会导致自己的元素消失，重写一个东西 之前选择器的id都没有了 造成内存就不会回收了尽量少用。

//5、滚动
// document.body.scrollByLines(5)
// document.body.scrollByPages(-1)



