// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
/*
输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4
输入：matrix = [["0","1"],["1","0"]]
输出：1
输入：matrix = [["0"]]
输出：0
*/
//动态规划 一开始没想明白 但是依然坚强的写完
var maximalSquare = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let max = 0;
    //初始动态方程
    let dp = [];
    for(let i=0;i<n;i++){
        let k = [];
        for(let j=0;j<m;j++){
            k.push(0)
        };
        dp.push(k)
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(i>0 && j>0){
                if(matrix[i][j]!=0){
                    dp[i][j] = Math.min(dp[i-1][j],dp[i-1][j-1],dp[i][j-1])+1;
                    max = Math.max(max,dp[i][j])
                }
            }else{
                dp[i][j] = matrix[i][j];
            }
            max = Math.max(max,dp[i][j]);
        }
    }
    console.log(dp);
    return max*4;
};
console.log(maximalSquare([[1,0,1,0,0,0],[1,0,1,1,1,1],[1,1,1,1,1,0],[1,0,1,1,1,1],[1,0,0,0,1,0]]))
