// 1、图像PIng 简单的单向的跨域通信的一种方式 常用于跟踪用户点击页面或者动态广告的曝光次数
var img=new Image();
img.onload=img.onerror=function () {
    console.log('done',img)
};
img.src='http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=图片&step_word=&hs=0&pn=2&spn=0&di=228030&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3209370120%2C2008812818&os=2426017583%2C3484836461&simid=3449127142%2C365241929&adpicid=0&lpn=0&ln=1598&fr=&fmq=1578902357884_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fi1.sinaimg.cn%2Fent%2Fd%2F2008-06-04%2FU105P28T3D2048907F326DT20080604225106.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fvi7wgstwgcm_z%26e3Bv54AzdH3F6jw1AzdH3FM4MyY4InNdV4kGFzwOWKqOjU7%2BSm77jJqjja5Ow1hAExATMcOAEyN3hBZGFrkHh7Ydc7Ytc3kda7Yd9ek4JnYtlrkWFgZXMeMTAeM3AxMzAnMT2eMTMnNDAcM3M8MDUzOCctkXABcYq5ccS0cLqmc94rcLtmcLdVcY%2BqcryJNOS&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined'
document.body.appendChild(img);
//2、JSONP 回调函数和数据
function handleResponse(response) {
    console.log('u=',response.ip,'sss',response.city,response.region_name)
}
var scr=document.createElement('script');
scr.src='http://freegeoip.net/json/?callback=handleResponse';
document.body.insertBefore(scr,document.body.firstChild)
var socket=new WebSocket('ws://freegeoip.net/json/?callback=handleResponse');
socket.send('h');
socket.onmessage=function (event) {
    var data=event.data;
}
socket.onopen=function (event) {
    var data=event.data;
}
socket.onclose=function (event) {
    var data=event.data;
}
socket.onerror=function (event) {
    var data=event.data;
}
