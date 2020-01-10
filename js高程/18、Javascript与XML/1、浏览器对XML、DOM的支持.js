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
// //4、IE8以及之前的版本 解析XML
// //尝试创建每个版本的实例，看是否有错误发生，可以确定那个版本可以用
function createDocument() {
    if(typeof arguments.callee.activeXString != 'string'){
        var versions=['MSXML2.DOMDocument.6.0','MSXML2.DOMDocument.3.0','MSXML2.DOMDocument'];
        var i,len;
        for(i=0,len=versions.length;i<len;i++){
            try{
                new ActiveXObject(versions[i]);
                arguments.callee.activeXString=versions[i];
                break;
            }catch (e) {
            //    跳过
            }
        }
    }
    return new ActiveXObject(arguments.callee.activeXString)
}
// var xmldom2=createDocument();
// //false表示同步
// xmldom2.async=false;
// xmldom2.loadXML('<root><child></child></root>');
// //序列化XML 内置在DOM文档中，每个DOM节点都有一个xml属性 保存着该节点的XML字符串
// console.log(xmldom2.documentElement.tagName,xmldom2.xml)
// if(xmldom2.parseError!=0){
//     //处理错误
//     console.log(xmldom2.parseError)
// }else{
//
// }
// //异步加载 关注XMLDOM文档的onreadystatechange事件 有4个就绪状态readystate 1 2 3 4DOM完全可以使用
// xmldom2.async=true;
// //这个事件必须放在loadXML之前 。才能确保在就绪状态变化时调用该事件处理程序
// xmldom2.onreadystatechange=function () {
//     //不能用this对象
//     if(xmldom2.readystate ==4 ){
//         f(xmldom2.parseError!=0){
//             //处理错误
//             console.log(xmldom2.parseError)
//         }else{
//
//         }
//     }
// };
// xmldom2.loadXML('abc.xml');
//5、跨浏览器处理XML
function parseXml(xml) {
    var xmldom=null;
    if(typeof DOMParser !=='undefined'){
        xmldom=(new DOMParser()).parseFromString(xml,'text/xml');
        var errors=xmldom.getElementsByTagName('parsererror');
        if(errors.length){
            throw new Error('XML parsing error')
        }
    }else if(typeof ActiveXObject !='undefined'){
        xmldom=createDocument();
        xmldom.loadXML(xml);
        if(xmldom.parseError!=0){
            throw new Error('XML parsing error')
        }
    }else{
        throw new Error('No XML parser available');
    }
}
try{
   var xmldom=parseXml('<root><child></child></root>')
}catch(e){
    console.log(e.message);
}

function serializeXml(xmldom) {
    if(typeof XMLSerializer !='undefined'){
        return (new XMLSerializer()).serializeToString(xmldom);
    }else if(typeof xmldom.xml != 'undefined'){
        return xmldom.xml;
    }else{
        throw new Error('不能把DOM转化为XML文件');
    }
}


