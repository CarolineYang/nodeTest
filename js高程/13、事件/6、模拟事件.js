var btn=document.getElementById('btn');
btn.onclick=function () {
    console.log('<<<')
}
var event=document.createEvent('MouseEvents');
event.initMouseEvent('click',true,true,document.defaultView,0,0,0,0,0,false,false,false,false,0,null);
btn.dispatchEvent(event);

var textbox=document.getElementById('textbox');
textbox.onkeypress=function () {
    console.log('sss')
}
var e=document.createEvent('KeyboardEvents');
e.initKeyboardEvent('keypress',true,true,document.defaultView,'a',"Shift",0);
textbox.dispatchEvent(e)
textbox.onfocus=function () {
    console.log('onfocus')
}
var es=document.createEvent('HTMLEvents');
es.initEvent('focus',true,false);
textbox.dispatchEvent(es)

//ie中的事件模拟 通用的 部分啥事件 思想一致 就是写法不一样 即便模拟了键盘事件 文本框里也没有内容
var ee=document.createEventObject();
ee.ctrlKey=false;
ee.clientX=0;
ee.button=0;
textbox.fireEvent('onclick',ee)
