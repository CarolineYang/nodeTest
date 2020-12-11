// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
/*
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
输入：height = [4,2,0,3,2,5]
输出：9
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
*/
//双指针吧
var trap = function(height) {
    let j,ans = 0;
    for(let i=0;i<height.length;i++){
            j = i+1;
            while(j<=height.length-1 && height[j]<height[i]){
                j++;
            }
            if(height[j]>=height[i] && j<=height.length-1){
                let num = 0;
                for(let k=i+1;k<j;k++){
                    num+=height[i]-height[k];
                }
                ans += num;
                i = j-1;
            }
            else{
                let res = height[i+1];
                if(res!=undefined){
                    while(j>i){
                        if(height[j]>=res){
                            res = height[j];
                        }
                        j--;
                    }
                    j = height.lastIndexOf(res);
                    let num = 0;
                    for(let k=i+1;k<j;k++){
                        num+=height[j]-height[k];
                    }
                    ans+=num;
                    i=j-1;
                }
        }
    }
    return ans;
};
// console.log(trap( [0,1,2,0,3,0,1,2,0,0,4,2,1,2,5,0,1,2,0,2]))
//dp 动态规划 贪心算法吧这是

var trap = function(height) {
    let j,ans = 0;
    let l = [],r = [];
    let n = height.length;
    l[0]=height[0];
    r[n-1] = height[n-1];
    for(let i=1;i<height.length;i++){
        l[i] = Math.max(l[i-1],height[i])
    }
    for(let i=n-2;i>=0;i--){
        r[i] = Math.max(r[i+1],height[i])
    }
    for(let i=0;i<height.length;i++){
        let min = Math.min(l[i],r[i]);
        if(min-height[i]>0){
            ans+=min-height[i];
        }

    }
    return ans;
};
console.log(trap( [0,1,0,2,1,0,1,3,2,1,2,1]))
