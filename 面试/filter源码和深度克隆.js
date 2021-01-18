var obj = {
    name : 'kiwi',
    teacher : {}
}
var obj1 = {
    name : 'sasa',
    teacher : {
        t1 : {name : 'coco', age : 32 },
        t2 : {name : 'joe',age : 20}
    },
    money : [1,2,3,4]
}
function deepClone (target, option){
    if(option){
        var copy,src;
        for(var prop in option){
            //罗列出option的属性名
            copy = option[prop];
            //罗列出target的属性名用于对比copy值是否已经有了一样的名称。
            src = target[prop];
            //判断是引用值还是原始值
            if(copy && typeof copy == 'object'){
                //判断引用值是数组还是对象
                if(Object.prototype.toString.call(copy) == '[object Array]'){
                    //如果target本身就有这个属性名那就用自己的属性名，如果没有就创建一个空数组用于存放属性值。
                    src = src ? src : [];
                }else{
                    console.log(src)
                    src = src ? src : {};
                }
                //用递归函数层层渗透解析，一直到原始值。
                target[prop] = deepClone(src, copy);
            }else{
                target[prop] = copy;
            }
        }
    }
    return target;
}
deepClone(obj, obj1)
console.log(obj);
let option = [1,2,3]
for(var prop in option){
    console.log(prop,option[prop])
}
Array.prototype.filter = function (fn) {
    let newArray = [];
    let len = this.length;
    for(let i=0;i<len;i++){
        if(fn(this[i],i)){
            if(typeof this[i] == "object"){
                var obj = {};
                newArray.push(deepClone(obj,this[i]));
            }else{
                newArray.push(this[i])
            }
        }
    }

    return newArray;
}

function deepC(obj) {
    let isA = Array.isArray(obj);
    let isO = Object.prototype.toString.call(obj)==="[object Object]";
    if(isA){
        let newObj = [];
        for(let i=0;i<newObj.length;i++){
            newObj[i] = deepClone(obj[i]);
        }
        return newObj;
    }else if (isO) {
        // 克隆Object
        let newObj = {};
        for (let i in obj) {
            newObj[i] = deepClone(obj[i]);
        }
        return newObj;
    }
    return obj;
}
console.log(deepC(obj1))
