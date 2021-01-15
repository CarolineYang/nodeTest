function curry(fn,cagrs) {
    return function () {
        let args = [].slice.call(arguments);
        // 首次调用时，若未提供最后一个参数currArgs，则不用进行args的拼接
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
function cuz(fn,cag){
    return function(){
        let args = [].slice.call(arguments);
        if(cag!=undefined){
            args = args.concat(cag)
        }
        if(args.length<fn.length){
            return cuz(fn,args)
        }
        return fn.apply(null,args)
    }

}

// fn(1, 2, 3); // 6
// fn(1, 2)(3); // 6
// fn(1)(2, 3); // 6
fn(1)(2)(3); // 6
// 普通的add函数
function add(x, y) {
    return x + y
}

// Currying后
function curryingAdd(x) {
    return function (y) {
        return x + y
    }
}

add(1, 2)           // 3
curryingAdd(1)(2)   // 3
