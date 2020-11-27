function createComparisonFunction(propertyName) {
    return function (a,b) {
        var value1 = a[propertyName];
        var value2 = b[propertyName];
        if(value1<value2){
            return -1;
        }else if(value1>value2){
            return 1;
        }else{
            return 0;
        }
    }
}
var co = createComparisonFunction('name');
var result = co({name:28},{name:29});
console.log(result)
//解除对一名函数的引用（以便释放内存）
co = null;

function f() {
    var a = new Array();
    for(var i=0;i<10;i++){
        a[i] = function () {
            return i;
        }
    }
    return a;
}
var hh = f();
hh.map(function (item) {
    console.log(item())
})
// console.log(hh)
function ff() {
    var a = new Array();
    for(var i=0;i<10;i++){
        a[i] = function (num) {
            return function () {
                return num
            }
        }(i);
    }
    return a;
}
// console.log(ff())
ff().map(function (item) {
    console.log(item())
})

var name = 'window';
var obj = {
    name:'my object',
    getName:function () {
        return function () {
            return this.name;
        }
    }

}
console.log(obj.getName()())
var obj2 = {
    name:'my object',
    getName:function () {
        var that = this;
        return function () {
            return that.name;
        }
    }
};
console.log(obj2.getName()());
//3、内存泄漏
function f1() {
    var ad = document.getElementById('ad');
    ad.onclick = function () {
        console.log('ad')
    }
    ad = null;
}
f1();
