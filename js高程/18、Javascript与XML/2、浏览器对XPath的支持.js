// 1、DOM3级XPath 中比较重要的两个类型XPathEvaluator（用于在特定的上下文中对XPath表达式求值） XPathResult
console.log(document.implementation.hasFeature('XPath','3.0'));
var xmldom=(new DOMParser()).parseFromString('<note>\n' +
    '    <to>Tove</to>\n' +
    '    <from>Jani</from>\n' +
    '    <heading>Reminder</heading>\n' +
    '    <heading>Remindersssss</heading>\n' +
    '    <body>Don\'t forget me this weekend!</body>\n' +
    '</note>','text/xml');
// //解析不成功 总是出现parsererror 好像是浏览器不能解析本地的xml文件 因为现在都已经用json 所有这个问题大家关注的不多了
console.log(xmldom.documentElement)
//FIRST_ORDERED_NODE_TYPE  ORDERED_NODE_ITERATOR_TYPE BOOLEAN_TYPE NUMBER_TYPE STRING_TYPE
var result=xmldom.evaluate('heading',xmldom.documentElement,null,XPathResult.ANY_TYPE,null);
console.log(result)
// if(result !==null){
//     var node=result.iterateNext();
//     console.log(node)
//     while(node){
//         console.log(node.tagName,node);
//         // node=node.iterateNext();
//     }
// }
if(result!=null){
    switch (result.resultType) {
        case XPathResult.STRING_TYPE:
            console.log('string');
            break;
        case XPathResult.NUMBER_TYPE:
            console.log('number');
            break;
        case XPathResult.BOOLEAN_TYPE:
            console.log('boolean');
            break;
        case XPathResult.UNORDERED_NODE_ITERATOR_TYPE:
            console.log('unorder');
            break;
        default:
            console.log('jjjj')
    }
}
//命名空间支持 书上讲了两种方法传参 命名空间求解器 只有第二种能用啊 起码没报错
var xmldom4=(new DOMParser()).parseFromString('mingmingkongjian.xml','text/xml');
var kk1=xmldom4.createNSResolver(xmldom4.documentElement);
var kk2=function (p) {
    switch (p) {
        case 'wrox':
            return 'http://www.wrox.com/'
    }
}
var res=xmldom4.evaluate('count(wrox:book)',xmldom4.documentElement,kk2,XPathResult.NUMBER_TYPE,null);
console.log(res)
// //2、IE中的XPath  内置在基于ActiveX的XML DOM文档对象中的，没有使用DOMParser返回的DOM对象
// var ele=xmldom.documentElement.selectSingleNode('to');
// if(ele!=null){
//     console.log(ele.xml)
// }
// var eles=xmldom.documentElement.selectNodes('to');
// console.log(eles.length)
// xmldom4.setProperty('SelectionNameSpace','xmlns:wrox="http://www.wrox.com/"');
// var res=xmldom4.documentElement.selectNodes('wrox:book')
//3、跨浏览器使用XPath 其实就是重写ie的两个方法selectSingleNode selectNodes 因为别的功能ie支持不了
