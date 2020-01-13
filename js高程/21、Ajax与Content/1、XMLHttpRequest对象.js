function createXHR() {
    if(typeof XMLHttpRequest!='undefined'){
        return new XMLHttpRequest();
    }else if(typeof ActiveXObject!='undefined'){
        if(typeof arguments.callee.activeXString!='undefined'){
            var versions=['MSXML2.XMLHttp.6.0','MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'];
            for(let i=0;i<versions.length;i++){
                try{
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString=versions[i];
                    break;
                }catch (e) {

                }
            }
        }
    }else{
        throw new Error('No XHR object available.');
    }
}
//1、XHR用法 open() send()；
var xhr=createXHR();
//open 并不会真正发送请求，而只是启动一个请求已备发送
//同步请求
xhr.open('get','a.json',false);
xhr.send(null);
if(xhr.status>=200 && xhr.status<300 || xhr.status==304){
    console.log(xhr.responseText,xhr.status)
}else{
    console.log('request was not successful:'+xhr.status)
}
//异步请求 检测XHR的readyState属性 0未初始化 1启动，已经调用open 2发送，调用send 3已经接受部分响应数据 4已经接收到全部响应数据，而且已经可以在客户端使用了
//必须在open（）之前，指定onreadystatechange事件才能确保跨浏览器兼容性
xhr.onreadystatechange=function () {
    if(xhr.readyState==4){
        if((xhr.status>=200 && xhr.status<300) || xhr.status==304){
            console.log(xhr.responseText,xhr.getResponseHeader('M'),xhr.getAllResponseHeaders())
        }else{
            console.log('fail:'+xhr.status)
        }
    }else{
        console.log(xhr.readyState,xhr.getResponseHeader('M'))
    }
};
xhr.open('get','a.json',true);
//2、http头部信息
xhr.setRequestHeader('M',"myvalue")
xhr.send(null);
//在接收到想赢之前 调用abort（）方法来取消异步请求 不建议重用XHR对象（内存原因）
// xhr.abort();

//3、GET请求
function addURLParam(url,name,value) {
    url+=(url.indexOf("?")==-1?"?":"&");
    //传入open（）方法的URL末尾的查询字符串必须经过正确的编码才行
    url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
    return url
}
