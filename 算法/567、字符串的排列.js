// 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
// 换句话说，第一个字符串的排列之一是第二个字符串的子串。
// 示例1:
//  输入: s1 = "ab" s2 = "eidbaooo"
// 输出: True
// 解释: s2 包含 s1 的排列之一 ("ba").
//     示例2:
// 输入: s1= "ab" s2 = "eidboaoo"
// 输出: False
// 注意：
// 输入的字符串只包含小写字母
// 两个字符串的长度都在 [1, 10,000] 之间
//滑动窗口吧  没有去重 while(s2[i] == s2[i+n]){i++;} 这玩意还超出时间限制了
//执行用时：9468 ms, 在所有 JavaScript 提交中击败了5.16%的用户
// 内存消耗： 44.9 MB, 在所有 JavaScript 提交中击败了8.56%的用户
var checkInclusion = function(s1, s2) {
    s1=s1.split('').sort();
    let n = s1.length;
    s2 = s2.split('');
    for(let i=0;i<s2.length-n+1;i++){
        let tar = s2.slice(i,i+n).slice().sort();
        if(tar.join('') == s1.join('')){
            return true;
        }
        while(s2[i] == s2[i+n]){
            i++;
        }
    }
    return false;
};
let a = ['b','a']
// console.log(a.sort((a,b)=>a.charCodeAt()-b.charCodeAt()))
//改版的滑动窗口 用哈希表来判断 不用数组排序了 省时间了点。
var checkInclusion2 = function(s1, s2) {
    s1=s1.split('');
    let ssa = {};
    s1.map(function(val){
        if(ssa[val]){
            ssa[val]++;
        }else{
            ssa[val] = 1;
        }
    })
    let n = s1.length;
    s2 = s2.split('');
    for(let i=0;i<s2.length-n+1;i++){
        let tar = s2.slice(i,i+n);
        let aa = {};
        tar.map(function(val){
            if(aa[val]){
                aa[val]++;
            }else{
                aa[val] = 1;
            }
        })
        let h = true;
        for(let k in ssa){
            if(aa[k]){
                if(aa[k]!=ssa[k]){
                    h = false;
                    break;
                }
            }else{
                h = false;
                break;
            }

        }
        if(h){
            return h;
        }
        while(s2[i] == s2[i+n]){
            i++;
        }
    }
    return false;
};

var as = {
    'a':3,
    "b":4,
    "c":5
};
for(let k in as){
    if(k!="b"){
        console.log(k)
    }else{
        break;
    }
}
