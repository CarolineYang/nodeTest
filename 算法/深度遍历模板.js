//从1到n 全排列 全排列类问题的深度遍历 递归
var DFS = function (n) {
    let res = [];
    let visit = new Array(n+1).fill(0);
    const loop = (arr)=>{
        if(arr.length == n){
            res.push(arr.join(''));
            return ;
        }
        for(let i=1;i<=n;i++){
            if(visit[i]==0){
                arr.push(i);
                visit[i] = 1;
                loop(arr);
                arr.pop();
                visit[i] = 0;
            }
        }
    }
    loop([]);
    console.log(res)
    return res;
};
DFS(3);

//还有一种也是属于深度遍历吧  查找并集的  就是逮住一个合适的使劲搜索相关信息 朋友圈 岛屿最大面积 合并区间 房间找钥匙也是类似找并集的问题
//下面是以朋友圈为例子这个模型最简单， 加深的有岛屿最大面积 还有合并区间的时候替换的变量
var unionFind = function (M) {
    let res = 0;
    let visit = new Array(M.length).fill(0);
    for(let i=0;i<M.length;i++){
        if(visit[i]==0){
            visit[i]=1;
            dfs(i);
            res++;
        }
    }
    function dfs(i) {
        for(let j=0;j<M.length;j++){
            if(visit[j] == 0 && M[i][j]==1){
                visit[j]=1;
                dfs(j);
            }
        }
    }
    return res;
}

console.log(unionFind([[1,1,0],
    [1,1,0],
    [0,0,1]]))
