var iframeWindow=document.getElementById('myframe').contentWindow;
iframeWindow.postMessage('a a a','http://localhost:63342');
window.onmessage=function (event) {
    console.log('jjj')
    //确保发送消息的域是已知的域
    if(event.origin=="http://localhost:63342"){
        //处理接收到的信息
        // processMessage(event.data);
        //向来源窗口发送回执
        event.source.postMessage('received','http://localhost:63342');
    }
}