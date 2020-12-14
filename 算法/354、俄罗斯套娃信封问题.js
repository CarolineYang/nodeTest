// 给定一些标记了宽度和高度的信封，宽度和高度以整数对形式 (w, h) 出现。当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
// 请计算最多能有多少个信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
// 说明:不允许旋转信封。
// 输入: envelopes = [[5,4],[6,4],[6,7],[2,3]]
// 输出: 3
// 解释: 最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
//排序（主要在排序） 动态规划 是二维的最长上升子序列的问题
var maxEnvelopes = function(envelopes) {
    envelopes = envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    let height = [];
    let n = envelopes.length;
    for (let i = 0; i < n; i++) {
        height[i] = envelopes[i][1];
    }
    return lengthOfLIS(height);
    function lengthOfLIS(nums) {
        let dp = new Array(nums.length).fill(1);
        //经典的动态规划问题 最长上升子序列  也可以用官方的那种维护最小数字的序列
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[i] - nums[j] > 0) {
                    dp[i] = Math.max(dp[i], dp[j] + 1)
                }
            }
        }
        return Math.max(...dp, 0)
    };
};
let a = [[8,3],[3,20],[15,5],[11,2],[19,6],[9,18],[1,19],[13,3],[14,20],[6,7]];
a = a.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
console.log(a);
console.log(maxEnvelopes([[8,3],[3,20],[15,5],[11,2],[19,6],[9,18],[1,19],[13,3],[14,20],[6,7]]));
