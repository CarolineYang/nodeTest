
class Promsie {
    constructor(fn) {
        //三个状态
        this.status = 'pending', this.resolve = undefined;this.reject = undefined;
        let resolve = value => {
            if (this.status === 'pending') {
                this.status = 'resolved';
                this.resolve = value;
            }
        };
        let reject = value => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.reject = value;
            }
        }
        try {
            fn(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    then(onResolved, onRejected) {
        switch (this.status) {
            case 'resolved': onResolved(this.resolve); break;
            case 'rejected': onRejected(this.resolve); break;
            default:
        }
    }

}


Promise.prototype.all=function (iterators) {
    const promises = Array.from(iterators);
    let resultList = [];
    const len = promises.length;
    let count = 0;
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
function promiseRace(promises) {
    if (!Array.isArray(promises)) {
        throw new Error("promises must be an array")
    }
    return new Promise(function (resolve, reject) {
        promises.forEach(p =>
            Promise.resolve(p).then(data => {
                resolve(data)
            }, err => {
                reject(err)
            })
        )
    })
}




