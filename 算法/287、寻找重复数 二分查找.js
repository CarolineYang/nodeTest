var findDuplicate = function(nums) {
    let lo = 1;
    let hi = nums.length - 1;
    while (lo < hi) {
        const mid = (lo + hi) >>> 1;  // 求中位数
        console.log(mid,nums[mid],lo)
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= mid) {
                count++;
            }
        }
        if (count > mid) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    console.log(lo)
    return lo;

};
console.log(findDuplicate([1,5,3,4,2,7,2]))
