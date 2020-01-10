function recursive(x,n) {
    if(n==0){
        return 1
    }
    var half=recursive(x,Math.floor(n/2));
    if(n%2==0){
        return half*half;
    }else{
        return half*half*x;
    }
}
function f(x,n) {
    let N=n;
    if(N<0){
        x=1/x;
        N=-N;
    }
    return recursive(x,N)
}
console.log(f(3,4),'b'.charCodeAt())

