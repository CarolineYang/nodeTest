class utils{
    constructor() {


    }


}
function def(obj,key,val,enumerable){
    Object.defineProperty(obj,key,{
        writable:true,
        enumerable,
        configurable:true,
        value:val
    })
}
module.exports = def