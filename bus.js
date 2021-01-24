class Event {
    constructor() {
        this.events = {}
    }
    on(type,handler){
        if(!this.events.hasOwnProperty(type)){
            this.events[type] = [];
        }
        this.events[type].push(handler);
    }
    emit(type,arg){
        let arr = this.events[type];
        arr.forEach((item)=>{
            item(arg);
        })
    }
    off(type,handler){
        if(this.events.hasOwnProperty(type)){
            this.events[type].splice(this.events[type].findIndex(handler),1)
        }
    }
}



