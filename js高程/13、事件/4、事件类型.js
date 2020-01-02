var a=10;
// 1、UI事件
// unload事件
//切换别的界面不会触发，但是关闭这个html文件一定会触发 全局变量a还可以取到 但是DOM树就都不在了已经 因为是在yi
//一切都被卸载之后才触发的  利用这个最多的是清楚引用，以避免内存泄漏
// window.onunload=function () {
//     console.log('leave',a)
//     alert('ppp',a)
// };
//2、焦点事件
var input1=document.getElementById('input1');
var input2=document.getElementById('input2');
input1.onfocus=function () {
    console.log('input1 focus')
};
input1.onblur=function () {
    console.log('input1 blur')
};
input1.onfocusout=function () {
    console.log('input1 focus out')
};
input1.onDOMFocusOut=function () {
    console.log('input1 DOMFocusOut')
};
input1.onDOMFocusIn=function () {
    console.log('input1 DOMFocusIn')
};
input2.onfocus=function () {
    console.log('input2 focus')
};
input2.onblur=function () {
    console.log('input2 blur')
};
input2.onfocusout=function () {
    console.log('input2 focus out')
};
input2.onDOMFocusOut=function () {
    console.log('input2 DOMFocusOut')
};
input2.onDOMFocusIn=function () {
    console.log('input2 DOMFocusIn')
};
console.log(document.implementation.hasFeature('FocusEvent','3.0'))
//3、鼠标与滚轮事件
var cl=document.getElementById('cl');
cl.onclick=function () {
    event.stopPropagation()
    console.log('click ed',event.detail)
}
input1.onclick=function () {
    console.log('click ed')
};
document.body.addEventListener('click',function () {
    //客户坐标 页面坐标 屏幕坐标
    console.log(event.clientX,event.clientY,event.pageX,event.pageY,event.screenX)
    var keys=new Array();
    //4个修改键
    if(event.shiftKey){
        keys.push('shift')
    }
    if(event.ctrlKey){
        keys.push('ctrl')
    }
    if(event.altKey){
        keys.push('alt')
    }
    if(event.metaKey){
        keys.push('meta')
    }
    console.log('keys',keys.join(','))
},false);
var list=document.getElementById('list');
// list.addEventListener('mouseout',function () {
//     var relatedTarget;
//     //只针对mouseover和mouseout事件才有的属性 event.relatedTarget  相关元素
//     if(event.relatedTarget){
//         relatedTarget=event.relatedTarget;
//     }else if(event.toElement){
//         relatedTarget=event.toElement;
//     }else if(event.fromElement){
//         relatedTarget=event.fromElement;
//     }
//     console.log(this.tagName,relatedTarget.tagName)
// },false);
list.addEventListener('mousedown',function () {
    if(document.implementation.hasFeature('MouseEvents','2.0')){
        console.log('非IE8：',event.button)
    }else{
        switch (event.button) {
            case 0:
            case 1:
            case 3:
            case 5:
            case 7:
                console.log(0);
                break;
            case 4:
                console.log(1);
                break;
            case 2:
            case 6:
                console.log(2);
                break;
        }
    }

},false);
//鼠标滚轮事件
document.addEventListener('mousewheel',function () {
    //实际上主要是看值的正负来判别是往哪个方向滚的
    // if(event.wheelDelta){
    //     if(client.engine.opera && client.engine.opera<9.5){
    //         //opera 浏览器的符号与标准的相反 都为120
    //         console.log(-event.wheelDelta)
    //     }else{
    //         console.log(event.wheelDelta)
    //     }
    //
    // }else{
    //     //firefox 浏览器的符号与标准的相反且为3
    //     console.log(-event.detail*40)
    // }
    console.log(event.wheelDelta)
});

//4、键盘与文本事件
//按下任何键
input1.onkeydown=function () {
    var event=event||window.event;
    //event.charCode是keypress事件特有的属性
    console.log(event.keyCode,event.charCode)
    console.log(event.shiftKey,event.ctrlKey,event.altKey,event.metaKey)
};
//按下字符键触发
input1.onkeypress=function () {
    var event=event||window.event;
    if(typeof event.charCode =='number'){
        console.log(event.charCode)
    }else{
        console.log(event.keyCode)
    }
};
// textInput是DOM3级事件 你用DOM0级事件处理程序自然是无法生效的ontextInput
input1.addEventListener('textInput',function () {
    var event=event||window.event;
    console.log('textInput',event.data)
},false)
//不生效事件
// input1.ontextInput=function () {
//     var event=event||window.event;
//     console.log('textInput',event.data)
// }

//5、复合事件 composition event  只有ie9支持
console.log('复合事件',document.implementation.hasFeature('CompositionEvent','3.0'))
var textbox=document.getElementById('textbox');
textbox.addEventListener('compositionstart',function () {
    console.log('start',event.data)
})
textbox.addEventListener('compositionupdate',function () {
    console.log('update',event.data)
})
textbox.addEventListener('compositionend',function () {
    console.log('end',event.data)
});
// 6、变动事件
// 移处节点 插入节点 DOMNodeRemoved DOMNodeRemovedFromDocument DOMSubtreeModified  DOMNodeInserted DOMNodeInsertedIntoDocument

//7、HTML5事件
//contextmenu事件
var context=document.getElementById('context');
var menu=document.getElementById('menu');
context.onclick=function () {
    menu.style.visibility='hidden';
};
//说白了就是单击右键事件 mac里是ctrl+单击事件
context.oncontextmenu=function () {
    var event=event||window.event;
    event.preventDefault();
    menu.style.top=event.clientY+'px';
    menu.style.left=event.clientX+'px';
    menu.style.visibility='visible';
};
//beforeunload事件
window.addEventListener('beforeunload',function () {
    var event=event||window.event;
    var mes='quedingma';
    event.returnValue= mes;
    return mes
});
//DOMContentLoaded 只要形成完整的DOM树就执行，不在意js和css和图片加载完了没有 所以一定在load事件前触发 旨在可以更早的进行DOM交互 大部分浏览器都支持
// 对象可以是window也可以是document
document.addEventListener('DOMContentLoaded',function () {
    console.log('jjjj')
});
//readystatechange
document.addEventListener('readystatechange',function () {
    if(document.readyState=="interactive" || document.readyState=="complete"){
        this.removeEventListener('readystatechange',arguments.callee);
        console.log('content loaded')
    }
})
//pageshow pagehide事件

//haschange事件  参数列表发生变动时
window.addEventListener('haschange',function (event) {
    console.log(event.oldURL,event.newURL,location.hash)
//    有些浏览器不支持oldURL属性，所有最好可以用location.hash
})
