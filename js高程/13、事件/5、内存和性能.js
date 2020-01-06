//1、事件委托
var list=document.querySelector('#list');
list.onclick=function (event) {
    console.log(event,event.target,event.target.className)
    switch(event.target.id){
        case 'a':
            console.log('1');
            break;
        case "b":
            console.log('2');
            break;
    }
};
//2、移除事件处理程序
var c=document.querySelector('#c');
c.onclick=function () {
    c.onclick=null;
    list.innerHTML='heihei'
};
