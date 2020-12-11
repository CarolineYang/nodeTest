// 给定一个包含了一些 0 和 1 的非空二维数组 grid 。
// 一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。
// 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)
/*
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]]
对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。

[[0,0,0,0,0,0,0,0]]
对于上面这个给定的矩阵, 返回 0。
*/
//深度遍历 也叫并查集
var maxAreaOfIsland = function(grid) {
    let len = grid.length;
    let wlen = grid[0].length;
    let visit = [];
    for(let i=0;i<len;i++){
        let k = [];
        for(let j = 0;j<wlen;j++){
            k.push(0)
        }
        visit.push(k)
    }
    let res = 0;
    let a = 0;
    for(let i=0;i<len;i++){
        for(let j=0;j<wlen;j++){
            if(visit[i][j]==0 && grid[i][j]==1){
                visit[i][j] = 1;
                a =1;
                dfs(i,j);
                res = Math.max(a,res)
            }
        }
    }
    function dfs(i,j) {
        if(grid[i-1]!=undefined){
            let up = grid[i-1][j];
            if(up!=undefined){
                if(visit[i-1][j]==0 && up == 1){
                    visit[i-1][j] = 1;
                    a++;
                    dfs(i-1,j);
                }
            }
        }
        if(grid[i+1]!=undefined){
            let down = grid[i+1][j];
            if(down!=undefined){
                if(visit[i+1][j]==0 && down == 1){
                    visit[i+1][j] = 1;
                    a++;
                    dfs(i+1,j);
                }
            }
        }
        let right = grid[i][j+1];
        let left = grid[i][j-1];


        if(right!=undefined){
            if(visit[i][j+1]==0 && right == 1){
                visit[i][j+1] = 1;
                a++;
                dfs(i,j+1);
            }
        }
        if(left!=undefined){
            if(visit[i][j-1]==0 && left == 1){
                visit[i][j-1] = 1;
                a++;
                dfs(i,j-1);
            }
        }


    }
    return res;
};
console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]]));

//广度遍历
var maxAreaOfIsland2 = function(grid) {
    let len = grid.length;
    let wlen = grid[0].length;
    let res = 0;
    for(let i=0;i<len;i++){
        for(let j=0;j<wlen;j++){
            if(grid[i][j]==1){
                res = Math.max(res,bfs(grid,i,j))
            }
        }
    }
    function bfs(grid,i,j) {
        let m = grid.length,n=grid[0].length;
        if(grid[i][j]==0){
            return 0;
        }
        grid[i][j]=0;
        let quene = [];
        quene.push([i,j]);
        let ress =1;
        let dirs = [[1,0],[-1,0],[0,1],[0,-1]];
        while(quene.length>0){
            let fir = quene.shift();
            for(let t=0;t<dirs.length;t++){
                let x = fir[0]+dirs[t][0];
                let y = fir[1]+dirs[t][1];
                if(x<0 || x>=m || y<0 || y>=n || grid[x][y]==0){
                    continue;
                }
                grid[x][y] = 0;
                ress++;
                quene.push([x,y])
            }
        }
        return ress;
    }
    return res;
};
console.log(maxAreaOfIsland2([[0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]]))
