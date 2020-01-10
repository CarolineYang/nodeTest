//XSLT是与XML相关的一种技术，利用XPath将文档从一种形式转换为另一种表现形式。但是它没有正式的API，正式的DOM规范中也没它。
//1、Ie中的XSLT
// var xmldom=new ActiveXObject('MSXML2.DOMDocument.6.0');
// var xsldom=new ActiveXObject('MSXSLT1.DOMDocument.6.0');
// xmldom.load('a.xml')
// xsldom.load('a.xsl');
// var result=xmldom.transformNode(xsldom)
// console.log(result)
//2、XSLTProcessor类型
var xmldom=(new DOMParser()).parseFromString('a.xml','text/xml');
var xsltdom=document.implementation.createDocument('','',null);
xsltdom.load('a.xsl')
var processor=new XSLTProcessor();
processor.importStylesheet(xsltdom);
console.log(xmldom,processor,xsltdom)
var result=processor.transformToFragment(xmldom);
var result1=processor.transformToDocument(xmldom);
//3、跨浏览器使用XSLt 比那个使用Xpath跨浏览器还困难 不现实
function tranform(content,xslt) {
    if(typeof XSLTProcessor!='undefined'){
        var processor=new XSLTProcessor();
        processor.importStylesheet(xslt);
        var result=processor.transformToDocument(content);
        return (new XMLSerializer()).serializeToString(result);
    }else if(typeof content.transformNode!='undefined'){
        return content.transformNode(xslt);
    }else{
        throw new Error('no xslt')
    }
}
