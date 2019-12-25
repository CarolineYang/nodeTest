//2、用户代理字符串检测技术
//通过用户代理字符串检测特定浏览器并不是一件轻松的事情，一般情况下，知道呈现引擎和最低限度的版本就足以决定正确的操作方法
// //不推荐（都不是自带函数啊）
// // if(isIE6 || isIE7){
// //     console.log('6huo 7')
// // }
// // //可以 但是这些方法
// // if(isVer >= 6){
// //     console.log('6++')
// // }
//识别呈现引擎、浏览器、平台、windows操作系统、移动设备、游戏系统
// 五大呈现引擎：IE Gecko WebKit KHTML Opera  识别呈现引擎（关键是检测顺序）
var client=function () {
    var engine={
        //呈现引擎
        ie:0,
        gecko:0,
        webkit:0,
        khtml:0,
        opera:0,
        //具体版本号
        ver:null
    };
    //识别浏览器
    var browser={
        ie:0,
        firefox:0,
        safari:0,
        konq:0,
        opera:0,
        chrome:0,
        ver:null
    };
    //识别平台
    var system={
        win:false,
        mac:false,
        xll:false,
    //   移动设备
        iphone:false,
        ipod:false,
        ipad:false,
        ios:false,
        android:false,
        nokiaN:false,
        winMobile:false,
        //游戏系统
        wii:false,
        ps:false
    };
    //呈现引擎先检测opera
    // 然后检测webkit
    // 然后检测khtml 再是gecko 最后ie
    var ua=navigator.userAgent;
    if(window.opera){
        engine.ver=browser.ver=window.opera.version();
        engine.opera=browser.opera=parseFloat(engine.ver);
    }
    else if(/AppleWebKit\/(\S+)/.test(ua)){
        engine.ver=RegExp['$1'];
        engine.webkit=parseFloat(engine.ver);
        //确定是chrome还是safari
        if(/Chrome\/(\S+)/.test(ua)){
            browser.ver=RegExp['$1'];
            browser.chrome=parseFloat(browser.ver);
        }else if(/Version\/(\S+)/.test(ua)){
            browser.ver=RegExp['$1'];
            browser.safari=parseFloat(browser.ver);
        }else{
            //近似的确定版本号
            var safariVersion=1;
            if(engine.webkit<100){
                safariVersion=1;
            }else if(engine.webkit<312){
                safariVersion=1.2;
            }else if(engine.webkit<412){
                safariVersion=1.3;
            }else{
                safariVersion=2;
            }
            browser.safari=browser.ver=safariVersion;
        }
    }
    else if(/KHTML\/(\S+)/.test(ua) || /Konqueror\/({^;}+)/.test(ua)){
        engine.ver=browser.ver=RegExp['$1'];
        engine.khtml=browser.konq=parseFloat(engine.ver);
    }
    else if(/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
        engine.ver=RegExp['$1'];
        engine.gecko=parseFloat(engine.ver);
        //确定是不是火狐浏览器
        if(/Firefox\/(\S+)/.test(ua)){
            browser.ver=RegExp['$1'];
            browser.firefox=parseFloat(browser.ver);
        }
    }
    else if(/MSIE ([^;]+)/.test(ua)){
        engine.ver=browser.ver=RegExp['$1'];
        engine.ie=browser.ie=parseFloat(engine.ver);
    }
    //识别平台
    var p=navigator.platform;
    system.win=p.indexOf('Win')==0;
    system.mac=p.indexOf('Mac')==0;
    system.xll=(p.indexOf('xll')==0) || (p.indexOf('Linux')==0);
    //移动设备
    system.iphone=p.indexOf('iPhone')>-1;
    system.ipod=p.indexOf('iPod')>-1;
    system.ipad=p.indexOf('iPad')>-1;
    system.nokiaN=p.indexOf('NokiaN')>-1;
    //windows mobile
    if(system.win=='CE'){
        system.winMobile=system.win;
    }else if(system.win=='Ph'){
        if(/Windows Phone OS (\d+.\d+)/.test(ua)){
            system.win='Phone';
            system.winMobile=parseFloat(RegExp["$1"]);
        }
    }
    //检测ios版本
    if(system.mac && ua.indexOf('Mobile')>-1){
        if(/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)){
            system.ios=parseFloat(RegExp.$1.replace("_","."))
        }else{
            system.ios=2;//不能真正检测出来，所以只能猜测
        }
    }
    //检测android版本
    if(/Android (\d+\.\d+)/.test(ua)){
        system.android=parseFloat(RegExp.$1)
    }
    //游戏设备
    system.wii=ua.indexOf('Wii')>-1;
    system.ps=/playstation/i.test(ua);
    //识别windows操作系统
    if(system.win){
        if(/Win(?:dows)?([^do]{2})\s?(\d+\.\d+)?/.test(ua)){
            if(RegExp['$1']=="NT"){
                switch (RegExp['$2']) {
                    case '5.0':
                        system.win='2000';
                        break;
                    case '5.1':
                        system.win='XP';
                        break;
                    case '6.0':
                        system.win='Vista';
                        break;
                    case '6.1':
                        system.win='7';
                        break;
                    default:
                        system.win='NT';
                        break;
                }
            }
            else if(RegExp['$1']=="9x"){
                system.win='ME';
            }else{
                system.win=RegExp['$1'];
            }
        }
    }
    return {
        engine:engine,
        browser:browser,
        system:system
    }
}();
if(client.engine.ie){

}else if(client.engine.gecko>1.5){
    if(client.engine.ver=='1.8.1'){

    }
}else if(client.engine.webkit){
    if(client.browser.chrome){
    //    执行针对chrome的代码

    }else if(client.browser.safari){
        //    执行针对safari的代码
    }
}else if(client.engine.gecko){
    if(client.browser.firefox){
        //    执行针对firefox的代码
    }else{
        //    执行针对其他gecko的代码
    }
}

if(client.system.win){
    if(client.system.win=='XP'){

    }else if(client.system.win=='Vista'){

    }
}

//用户代理检测是客户端检测的最后一个选择 优先使用能力检测和怪癖检测


