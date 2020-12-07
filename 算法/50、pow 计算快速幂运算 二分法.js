// 不能用Math.pow(x,n)
console.log(10>>1)
var myPow = function (x,n) {
    if(n==0){
        return 1;
    }
    if(n<0){
        return myPow(1/x,-n)
    }
    if(n%2){
        return x*myPow(x,n-1)
    }
    return myPow(x*x,n/2)
}
console.log(myPow(3,3))
var myPow2 = function (x,n) {
   let res = 1;
   if(n<0){
       n = -n;
       x = 1/x;
   }
   while(n){
       if(n & 1){
          res = res * x;
       }
       x *= x;
       n = n>>>1;
   }
   return res;
};
console.log(myPow2(3,3))
let s = Array.from(new Set([1,2,2,3,1]));
console.log(s)
