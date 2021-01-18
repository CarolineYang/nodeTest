var arr = [1,2,5,50,3];
Array.prototype.myReduce = function(fn, init){
    var len = this.length;
    var pre = init;
    var i = 0;
    //判断是否传入初始值
    if(init == undefined){
        //没有传入初始值，数组第一位默认为初始值，当前元素索引值变为1。
        pre = this[0];
        i = 1;
    }
    for(i; i < len; i ++){
        //当前函数返回值为下一次的初始值
        pre = fn(pre, this[i], i)
    }
    return pre;
}



var add = arr.myReduce(function(preTotal, ele, index){
    return preTotal + ele;
},100)
console.log(add);
