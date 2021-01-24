
// function foo() {
//     console.log('??')
// }()
//不可执行  函数声明不允许直接执行
!(function foo() {
    console.log('??')
})()

class Promise {
    constructor(fn) {
        this.status = 'pendding',this.resolve = undefined,this.reject = undefined;
        let resolve = value=>{
            if(this.status=="pendding"){
                this.status = 'resolve';
                this.resolve = value
            }
        }
        let reject = value=>{
            if(this.status=="pendding"){
                this.status = 'reject';
                this.reject = value
            }
        }
        try{
            fn(resolve,reject);
        }catch(e){
            reject(e)
        }

    }
    then(onResolve,onReject){
        switch (this.status) {
            case 'resolved': onResolved(this.resolve); break;
            case 'rejected': onRejected(this.resolve); break;
            default:
        }
    }
}