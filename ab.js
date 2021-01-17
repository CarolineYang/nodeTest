let a = [1,2,3];
let b = a.reduce((prev,next)=>{
    return prev+next
});
console.log(b);
Array.prototype.reduce = function (fn) {
    if(index == arr.length){
        return prev;
    }
    prev = fn(prev,next);
    next = arr[index+2];
    index++;
    return arguments.callee(prev,next,index,arr)
};
let a = [1,4,5][2,3,5,6]
function f() {

}
