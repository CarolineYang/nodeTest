console.log(document.implementation.hasFeature('CSS2','2.0'))
//1、访问元素的样式
var box=document.getElementsByClassName('box')[0];
console.log(box.style.width,box.style.length)//200px
for(let i=0;i<box.style.length;i++){
    console.log(box.style[i]+":"+box.style.getPropertyValue(box.style[i]))
}
box.style.removeProperty('border')
//获取计算后的样式  都是只读的 返回一个CSSStyleDeclaration对象
var computedStyle=document.defaultView.getComputedStyle(box,null) || box.currentStyle;
console.log(computedStyle.width)
//document.styleSheets获取link和style标签 获取不到行内样式
//2、操作样式表
//css规则  属性 cssText parentRule parentStyleSheet selectorText style type
console.log(document.getElementsByTagName('link')[0].sheet,document.styleSheets)
for(let i=0;i<document.styleSheets.length;i++){
    console.log(document.styleSheets[i].href)
}
var sheet=document.styleSheets[0];
var rules=sheet.cssRules || sheet.rules;
console.log(rules[0].cssText,rules[0],rules[0].style.cssText)
rules[0].style.backgroundColor='pink';
//相当于写在了css文件里 顺序解析，依然还是style在link的后面 所以这个不起作用
// rules[0].cssText可读  rules[0].style.cssText可读可写

//创建规则 insertRule()
sheet.insertRule('body{background-color:yellow}',1);
sheet.addRule('body','background-color:silver',1); //ie中   在Chrome中 也生效。。。
sheet.deleteRule(0); //sheet.removeRule(0) ie
// 3、元素大小
// offsetWidth offsetHeight  offsetTop  offsetLeft 偏移量 offsetParent  offsetWidth=content+padding+border
//客户区的大小clientWidth content+padding
//滚动大小 scrollHeight 没有滚动条的情况下元素内容的总宽度  scrollLeft被隐藏在内容区域左侧的像素数

