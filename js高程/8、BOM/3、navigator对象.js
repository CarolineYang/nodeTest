//navigator现在已经成为识别客户端浏览器的事实标准
//每个浏览器的navigator对象都有自己的一套属性
// plugins（浏览器中安装的插件信息的数组） userAgent(浏览器用户代理字符串)  vendor（浏览器品牌）
//1、检测插件
//插件的每一项都有四个属性， name description filename length
//检测非ie中的插件
function hasPlugin(name) {
    name=name.toLowerCase();
    for(let i=0;i<navigator.plugins.length;i++){
        if(navigator.plugins[i].name.toLowerCase().indexOf(name)>-1){
            return true
        }
    }
    return false
}
hasPlugin('Flash');hasPlugin('QuickTime');
//检测ie
function hasIePlugin(name) {
    try{
        new ActiveXObject(name);
        return true;
    }catch (e) {
        return false
    }
}
//IE是以COM对象 的方式实现插件的，而COM对象使用唯一标识符来标识。检查插件必须知道他的COM标识符
hasIePlugin('ShockwaveFlash.ShockwaveFlash');
hasIePlugin('QuickTime.QuickTime')
//检测多有浏览器的Flash
function hasFlash() {
    var result=hasPlugin('Flash');
    if(!result){
        result=hasIePlugin('ShockwaveFlash.ShockwaveFlash')
    }
    return result
}

//2、注册处理程序  registerContentHandler()  registerProtocolHandler()
//将一个站点注册为处理rss源的处理程序(好像chrome都不识别这两个方法)
// navigator.registerContentHandler('application/rss+xml',"http://www.somereader.com?feed=%s",'Some Reader');
// //将一个应用程序注册为默认的邮件客户端
// navigator.registerProtocolHandler('mailto','http://www.somemailclient.com?cmd=%s','Some Mail Client');
