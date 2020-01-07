// 1、DOM2级核心
var xmldom=document.implementation.createDocument('','root',null);
console.log(xmldom.documentElement.tagName);
var child=xmldom.createElement('child');
xmldom.documentElement.appendChild(child);
console.log(xmldom,document.implementation.hasFeature('XML','2.0'));
//2、DOMParser类型 返回一个doucument实例 不能把HTML解析为HTML文档
var parser=new DOMParser();
try{
    var xmldom1=parser.parseFromString('<root><child/></root>','text/xml');
    console.log(xmldom1.documentElement.tagName,xmldom1.documentElement.firstChild.tagName);
    var anotherChild=xmldom1.createElement('child');
    xmldom1.documentElement.appendChild(anotherChild);
    console.log(xmldom1.getElementsByTagName('child').length,xmldom1);
    var errors=xmldom1.getElementsByTagName('parsererror');
    if(errors.length>0){
        throw new Error('parsing error!');
    }
}catch (e) {
    console.log('parsing ere')
}
// 3、XMLSerializer类型 --将DOM文档序列化成XML字符串 也包括html文档
var serializer=new XMLSerializer();
var xml=serializer.serializeToString(document);
console.log(xml);

