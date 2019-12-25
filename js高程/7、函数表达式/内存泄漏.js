function f() {
    var ele=document.getElementsById('hh');
    ele.onclick=function () {
        console.log(ele.id)
    }
}
//闭包循环引用，匿名函数保存了一个对f（）的活动对象的引用，永远也不能导致ele的引用数。只要匿名函数存在，ele的引用数至少是1，所有他的内存永远不会
//被回收。

function f() {
    var ele=document.getElementsById('hh');
    var id=ele.id;
    ele.onclick=function () {
        console.log(id)
    }
    ele=null; //解除引用  顺利减少引用数，确保回收占用的内存
}
