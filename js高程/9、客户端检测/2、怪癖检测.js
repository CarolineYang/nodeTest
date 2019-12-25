//ie8 如果某个属性实例与标记为enumerable为false的原型属性同名，那么该实例属性就不会出现在for-in循环中
var hasEnumerableQuirk=function () {
    var o={
        toString:function () {

        }
    }
    for(let key in o){
        if(key == 'toString'){
            return false
        }
    }
    return true;
}();
console.log(hasEnumerableQuirk)
