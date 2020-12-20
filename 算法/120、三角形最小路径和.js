// 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
// 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
/*
例如，给定三角形：

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
 */
//很明显的动态规划啊。。。
var minimumTotal = function(triangle) {
    let len = triangle.length;
    let dp = new Array(len);
    for(let i=0;i<len;i++){
        dp[i] = new Array(i+1);
    }
    dp[0][0] = triangle[0][0];
    for(let i=1;i<len;i++){
        for(let j=0;j<=i;j++){
            if(j>i-1){
                dp[i][j]=triangle[i][j]+dp[i-1][i-1];
            }
            else if(j-1<0){
                dp[i][j]=triangle[i][j]+dp[i-1][0];
            }else{
                dp[i][j] = Math.min(triangle[i][j]+dp[i-1][j-1],triangle[i][j]+dp[i-1][j])
            }
        }

    }
    console.log(dp);
    return Math.min(...dp[dp.length-1])
};
console.log(minimumTotal([[-1],[2,3],[1,-1,-3]]))
