//能力检测的目标不是识别浏览器，而是识别浏览器的能力。
//1、基本模式如下
if(object.propertyInQuestion){
//    使用object.propertyInQuestion
}
//ie5不支持docume.getElementById()这个DOM方法，使用document.all属性来实现相同目的
function getElement(id) {
    if(document.getElementById){
        return document.getElementById(id)
    }else if(document.all){
        return document.all[id]
    }else{
        throw new Error ('No way to retrieve element!')
    }
}
//先检测达成目的的最常用特性 ，然后就是必须测试实际要用到的特性。你不能通过判别document.all就说它一定是ie（有可能是opera）然后使用ie的其他特性。
//更可靠的能力检测
function isSortable(obj) {
    return typeof obj.sort == 'function'
}
// 2、能力检测，不是浏览器检测
//错误，不够具体
var isFirefox= !!(navigator.vendor && navigator.vendorSub);
//错误，假设过头了
var isIe= !!(document.all && document.uniqueID);
//确定浏览器是否支持Netscape风格的插件
var hasNSPlugin=!!(navigator.plugins && navigator.plugins.length);
//确认浏览器是否有DOM1的能力
var hasDOM1= !!(document.getElementById && document.createElement && document.getElementsByTagName)
