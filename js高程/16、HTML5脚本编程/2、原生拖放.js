//1、拖放事件 a的dragstrat drag dragend  b的dragenter dragover dragleave drop
var a=document.getElementById('a');
var b=document.getElementById('b');
a.addEventListener('dragstart',function () {

    // event.dataTransfer.effectAllowed='move';
    event.dataTransfer.setData('text',a.children[0].innerHTML);
    event.dataTransfer.setData('url',a.children[1].src);
    console.log('dr',event.dataTransfer)
});
b.addEventListener('dragenter',function () {
    // event.dataTransfer.dropEffect='move';
    event.preventDefault();
    // console.log('dragenter',event.dataTransfer)
});
b.addEventListener('dragover',function () {
    event.preventDefault();
    // console.log('dragover',event.dataTransfer)
});

b.addEventListener('drop',function () {
    // event.dataTransfer.dropEffect='copy';
    event.dataTransfer.clearData('url');
    var img=document.createElement('img');
    img.width='200';
    img.height='200';
    img.src=event.dataTransfer.getData('url');
    this.appendChild(img);
    console.log('drop',event.dataTransfer.getData('url'))
});
window.addEventListener('message',function (event) {
    console.log('jjj')
    //确保发送消息的域是已知的域
    if(event.origin=="http://localhost:63342"){
        //处理接收到的信息
        // processMessage(event.data);
        //向来源窗口发送回执
        event.source.postMessage('received','http://localhost:63342');
    }
})