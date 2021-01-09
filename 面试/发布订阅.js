class EventEmitter{
    constructor(){
        // 用来存放 订阅 和 发布的关系的
        this.eventMap = {};
    }
    // type 这里就代表事件的名称
    on(type,handler){
        if(!(handler instanceof Function)){
            throw new Error('请传入一个函数！')
        }
        // 判断 我们的map 中是否有这个类型
        if(!this.eventMap[type]){
            // 若不存在，新建该队列
            this.eventMap[type] = [handler]
        }else{
            // 若存在，直接往队列里推入 handler
            this.eventMap[type].push(handler)
        }

    }
    //向上派发 消息出去
    emit(type,params){
        if(this.eventMap[type]){
            // 将事件队列里的 handler 依次执行出队
            this.eventMap[type].forEach((handler, index) => {
                // 这里携带参数, 触发on方法的handler 回调
                handler(params);
            });
        }else {
            throw new Error('wucifangfa ')
        }

    }
    off(type,handler){
        // console.log(this.eventMap)
        if(this.eventMap[type]){
            // 将事件队列里的 handler 依次执行出队
            this.eventMap[type].splice(this.eventMap[type].findIndex(handler),1);
        }
        // console.log(this.eventMap)
    }
}
// 订阅:
//     on(): 负责 测试 事件的监听器,指定 事件触发的回调函数, 把对应的事件和函数,写入到 eventMap 里面去
// 发布:
//     emit(): 负责触发事件,把事件发布,然后把参数携带,派发给on里面的handler的回调函数里面去
// off(): 负责监听器的删除
const hh = new EventEmitter();
const test = (a)=>{
 console.log('??',a)
}
const tests = (a)=>{
    console.log('sssss',a)
}
hh.on('click',test);
hh.on('click',tests);
hh.emit('click',5);
hh.on('clicks',tests);
hh.emit('clicks',566);
hh.off('click',test);
hh.emit('click',5);
