var defineReactive = require('./defineReactive');
var Dep = require('./Dep');
var observe = require('./observe');
var arrayMethods = require('./arrayMethods');
var def = require('./utils');
class Observer {
    constructor(value) {
        console.log('Observer',observe);
        //每个observer都有一个dep属性
        this.dep = new Dep();
        //this指的是实例本身
        def(value,'__ob__',this,false);
        if(Array.isArray(value)){
            Object.setPrototypeOf(value,arrayMethods);
            this.observeArray(value);
        }else{
            this.walk(value);
        }
    }
    //遍历
    walk(value){
        for(let key in value){
            defineReactive(value,key);
        }
    }
    observeArray(arr){
        for(let i=0,l=arr.length;i<l;i++){
            observe(arr[i])
        }
    }
}
module.exports = Observer;