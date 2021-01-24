var id = 0;
class Dep {
    constructor() {
        this.subs = [];
        this.id = id++;
    }
    addSub(val){
        this.subs.push(val)
    }
    // 添加依赖
    depend(){
        if(Dep.target){
            this.addSub(Dep.target)
        }
    }
    notify(){
        //浅克隆
        let subs = this.subs.slice();
        for(let i=0;i<subs.length;i++){
            subs[i].update();
        }
    }

}
module.exports = Dep