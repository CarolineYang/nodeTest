//只要浏览器接收到服务器的响应，不管状态如何，都会触发load事件，这意味着你必须检查status属性，才能确定是否真的有用
var xhr=new XMLHttpRequest();
xhr.onload=function () {
    if(xhr.readyState==4){
        if((xhr.status>=200 && xhr.status<300) || xhr.status==304){
            console.log(xhr.responseText,xhr.getAllResponseHeaders())
        }else{
            console.log('fail:'+xhr.status)
        }
    }
};
xhr.onprogress=function (event) {
   console.log('s',event.position,event.totalSize,event.lengthComputable)
};
xhr.open('get','a.json',true);
xhr.send(null);

