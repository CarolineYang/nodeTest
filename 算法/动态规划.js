// 62、不同路径
// 63、不同路径2-有障碍物
// 64、最短路径和
//dp[i][j] = dp[i-1][j]+dp[i][j-1]  第一行和第一列均为1
let a = {
    1:'1',
    2:'2',
    3:'2'
}
for(let key in a){
    if(key == 2){
        break;
    }
    console.log(key)
}


