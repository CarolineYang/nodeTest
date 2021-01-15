function curry(fn,cagrs) {
    return function () {
        let args = [].slice.call(arguments);
        // 首次调用时，若未提供最后一个参数currArgs，则不用进行args的拼接
        console.log(args,cagrs,'sss')
        if(cagrs !==undefined){
            args = args.concat(cagrs)
        }
        // 递归调用
        console.log(args,cagrs,fn.length)
        if(args.length<fn.length){
            return curry(fn,args)
        }
        return fn.apply(null,args)
    }
}
function sum(a, b, c) {
    console.log(a + b + c);
}
const fn = curry(sum);

// fn(1, 2, 3); // 6
// fn(1, 2)(3); // 6
// fn(1)(2, 3); // 6
fn(1)(2)(3); // 6
