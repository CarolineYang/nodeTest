// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 输入: [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解
//贪心
var maxSubArray = function(nums) {
    let sum = 0;
    let ans = nums[0];
    for(let i=0;i<nums.length;i++){
        if(sum>0){
            sum += nums[i]
        }else{
            sum = nums[i]
        }
        ans = Math.max(ans,sum)
    }
    return ans

};
var maxSubArray = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(i>0 && nums[i-1]>0){
            nums[i] = nums[i-1]+nums[i]
        }
    }
    return nums.sort((a,b)=>b-a)[0]
};
//动态规划
var maxSubArray = function(nums) {
    let dp = [];
    dp[0] = nums[0];
    let max;
    for(let i=1;i<nums.length;i++){
        dp[i] = Math.max(nums[i],dp[i-1]+nums[i]);
        max = Math.max(max,dp[i])
    }
    return max;
};

// 分治  ？？？ 不会
