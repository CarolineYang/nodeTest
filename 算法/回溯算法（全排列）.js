// 39. 组合总和
// 40. 组合总和 II
// 46. 全排列
// 47. 全排列 II
// 77. 组合
// 78. 子集
// 90. 子集 II
// var a = new Array(5);
// console.log(a)
var lengthOfLongestSubstring = function(s) {
    let r;
    let res = 0;
    for(let i=0;i<s.length;i++){
        r = i+1;
        console.log(s.substring(i,r))
        while(s.substring(i,r).indexOf(s[r])==-1){
            r++;
        }
        if(res<r-i){
            res = r-i;
        }
        i = r -1;
    }
    return res;
};
lengthOfLongestSubstring('abcabcbb')