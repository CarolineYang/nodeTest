var xhr=new XMLHttpRequest();
xhr.open('post','a.json',true);
var form=document.forms[0];
var data=new FormData(form);
//ie8 支持
xhr.timeout=1000;
//请求1秒钟内没反悔，就会自动终止。会调用ontimtout事件，但是此时readyState可能已经改变为4，意味着调用onreadystatechange事件，可是超时之后访问status属性可能会报错
//所以，建议用try catch
xhr.ontimeout=function(){

}
//强迫XHR对象将响应当做XML而非纯文本来处理。 ie不支持
xhr.overrideMimeType('text/xml')
xhr.send(data);
//这样就不用再XHR对象上设置请求头部了，能够识别传入的数据是FormData的实例
