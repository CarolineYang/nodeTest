// 班上有N名学生。其中有些人是朋友，有些则不是。他们的友谊具有是传递性。如果已知A是B的朋友,B是C的朋友，
// 那么我们可以认为A也是C的朋友。所谓的朋友圈，是指所有朋友的集合。
// 给定一个N * N的矩阵M，表示班级中学生之间的朋友关系。
// 如果M[i][j] = 1，表示已知第 i 个和 j 个学生互为朋友关系，否则为不知道。你必须输出所有学生中的已知的朋友圈总数。
/*
输入：
[[1,1,0],
 [1,1,0],
 [0,0,1]]
输出：2
解释：已知学生 0 和学生 1 互为朋友，他们在一个朋友圈。
第2个学生自己在一个朋友圈。所以返回 2 。
*/
/*
输入：
[[1,1,0],
 [1,1,1],
 [0,1,1]]
输出：1
解释：已知学生 0 和学生 1 互为朋友，学生 1 和学生 2 互为朋友，所以学生 0 和学生 2 也是朋友，所以他们三个在一个朋友圈，返回 1 。
 */
//动态连通性  并集查找算法 递归深度遍历
var findCircleNum = function(M) {
    let visit = new Array(M.length).fill(0);
    let num = 0;
    for(let i=0;i<M.length;i++){
        if(!visit[i]){
            visit[i]=1;
            dfs(i);
            num++;
        }
    }
    function dfs(i){
        for(let j=0;j<M.length;j++){
            if(!visit[j] && M[i][j]){
                visit[j] = 1;
                dfs(j);
            }
        }
    }

    return num
};
//自己搞的辣鸡  还有类似钥匙去房间的问题那个一样 都属于并集查找问题
var findCircleNum = function(M) {
    let visit = [];
    for(let i=0;i<M.length;i++){
        visit.push(new Set());
    }
    for(let i=0;i<M.length;i++){
        for(let j=0;j<M[i].length;j++){
            if(M[i][j]!=0){
                visit[i].add(j)
            }
        }
    }
    let num = 0;
    let visited = new Array(M.length).fill(0);
    visit.map(function (val) {
        Array.from(val).map(function (item) {
            if(!visited[item]){
                visited[item] = 1;
                dfs(item);
                num++;
            }
        })

    });
    function dfs(index){
        for(let i=0;i<M.length;i++){
            if(!visited[i] && M[index][i]){
                visited[i] = 1;
                dfs(i);
            }
        }
    }
    console.log(visit);
    return num;
};
findCircleNum([[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,1,0,0,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,1,0,0,0,1,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]])
