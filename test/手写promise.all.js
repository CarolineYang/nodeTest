class Promise{
    constructor(fn) {
        this.status = 'pending';
        this.resolve = undefined;
        this.reject = undefined;
        //
        this.onResolvedCallbacks = [] //成功的回调函数
        this.onRejectedCallbacks = [] //失败的回调函数
        let resolve = (value)=>{
            if (this.status === 'pending'){
                this.status = 'resolved';
                this.resolve = value;
                //发布执行函数
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }
        let reject = (value)=>{
            if (this.status === 'pending'){
                this.status = 'rejected';
                this.reject = value;
                //失败执行函数
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        try{
            fn(resolve,reject)
        }catch(e){
            reject(e)
        }
    }
    then(onResolved, onRejected){
        switch (this.status) {
            case "resolved":onResolved(this.resolve);break;
            case "rejected":onRejected(this.reject);break;
            default:
        }
        // 异步
        if (this.status == 'pending') {
            // 在pending状态的时候先订阅
            this.onResolvedCallbacks.push(() => {
                // todo
                onResolved(this.resolve)
            });
            this.onRejectedCallbacks.push(() => {
                // todo
                onRejected(this.reject)
            });
        }
    }
}
Promise.prototype.all = function(iterators){
    const promises = Array.from(iterators);
    let count = 0;
    let resultList = [];
    const len = promises.length;
    return new Promise((resolve,reject)=>{
        promises.forEach((item,index)=>{
            Promise.resolve(item).then((res)=>{
                resultList[index] = res;
                count++;
                if(count == len){
                    resolve(resultList)
                }
            }).catch((err)=>{
                reject(err)
            })
        })
    })
};
Promise.prototype.race = function (promises) {
    if (!Array.isArray(promises)) {
        throw new Error("promises must be an array");
    }
    return new Promise((resolve,reject)=>{
        promises.forEach((p)=>{
            Promise.resolve(p).then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject(err)
            })
        })
    })
}





