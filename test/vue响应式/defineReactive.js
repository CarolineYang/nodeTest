// var observe = require('./observe');
var observe = require('./observe');
var Dep = require('./Dep');
console.log('sss',observe);
function defineReactive(obj,key,val){
    let dep = new Dep();
    if(arguments.length == 2){
        val = obj[key];
    }
    let childOb = observe(val);
    console.log('defineReactive');
    Object.defineProperty(obj,key,{
        configurable:true,
        enumerable:true,
        get(){
            console.log('get');
            //收集依赖
            if(Dep.target){
                dep.depend();
                if(childOb){
                    childOb.dep.depend()
                }
            }
            return val;
        },
        set(newValue){
            console.log('set');
            if(newValue == val){
                return;
            }
            val = newValue;
            childOb = observe(newValue);
            //发布订阅模式 触发依赖
            dep.notify();
        }
    })
}
module.exports =  defineReactive;