//动态规划 没用递归会超时 f(n)= f(n-1)+ f(n-2)
var fib = function(n) {
    let constant = 1000000007;
    if(n==0){return 0;}
    if(n==1){return 1;}
    let dp = [0,1];
    for(let i=2;i<=n;i++){
        dp.push((dp[0]+dp[1])%constant);
        dp.shift();
    }
    return dp.pop()
};