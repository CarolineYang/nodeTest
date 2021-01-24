var id = 0;
class Watcher {
    constructor(obj,expression,callback) {
        this.id = id++;
        this.getter = parsePath(expression);
        this.target = obj;
        this.callback = callback;
        this.value = this.get();
    }
    get(){
    //    进入依赖收集的阶段
        Dep.target = this;
        const obj = this.target;
        let value;
        try{
            value = this.getter(obj);
        }finally {
            Dep.target = null;
        }
        return value;
    }
    update(){
        this.run()
    }
    run(){
        this.getAndInvolved();
    }
    getAndInvolved(cb){
        const value = this.get();
        if(value!= this.value || typeof value == "object"){
            const oldValue = this.value;
            this.value = value;
            cb.call(this.target,value,oldValue)
        }
    }
}
module.exports = Watcher;