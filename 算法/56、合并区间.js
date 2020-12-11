// 给出一个区间的集合，请合并所有重叠的区间。
/*
输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

输入: intervals = [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
*/
//其实还是并集查找问题 dfs 递归 和朋友圈问题 殊途同归
//递归
var merge = function(intervals) {
    let visit = new Array(intervals.length).fill(0);
    let res = [];
    for(let i=0;i<intervals.length;i++){
        if(!visit[i]){
            visit[i] = 1;
            a = intervals[i];
            dfs(i,intervals[i]);
            res.push(a);
        }
    }
    function dfs(i,arr) {
        for(let j=0;j<intervals.length;j++){
            if(visit[j]==0 && intervals[j][0]<=arr[1] && intervals[j][1]>=arr[0]){
                visit[j] = 1;
                a = [Math.min(intervals[j][0],arr[0]),Math.max(intervals[j][1],arr[1])]
                dfs(j,a);
            }
        }
    }
    return res
};
console.log(merge([[2,3],[5,5],[2,2],[3,4],[3,4]]))
//排序 然后双指针
var merge2 = function(intervals) {
    let visit = new Array(intervals.length).fill(0);
    intervals = intervals.sort((a,b)=>{
        return a[0]-b[0]
    });
    let res = [];
    for(let i=0;i<intervals.length;i++){
        let j = i+1;
        if(i==intervals.length-1 || intervals[i][0]>intervals[j][1]){
            res.push(intervals[i])
        }else{
            let he = intervals[i];
            while((j<=intervals.length-1) && (he[0] <= intervals[j][1]) && (he[1]>=intervals[j][0]) ){
                he = [Math.min(he[0],intervals[j][0]),Math.max(he[1],intervals[j][1])];
                j++;
            }
            res.push(he);
            i = j-1;
        }

    }
    return res
};
