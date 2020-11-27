function factorial(num) {
    if(num<=1){
        return 1;
    }else{
        // return num*factorial(num-1);
        return num*arguments.callee(num-1);
    }
}
var a = factorial(5);
console.log(a);
var ann = factorial;
factorial = null;
console.log(ann(5));

var b = (function f(num) {
    if(num<=1){
        return 1;
    }else{
        return num*f(num-1);
    }
});
var c = b;
b = null;
console.log(c(5))
