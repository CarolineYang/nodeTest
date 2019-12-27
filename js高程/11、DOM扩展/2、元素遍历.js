var list=document.getElementById('list');
var child=list.childNodes;
var child1=list.firstChild;
var child1New=list.firstElementChild
console.log(child,child1,child1New)
//因为浏览器会反悔文本节点，所有用childNodes访问的其中有很多空白文本节点，影响我们查找element节点 所以定义了五个属性为了更方便操作element元素
