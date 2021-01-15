// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
//
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
var letterCombinations = function(digits) {
    if (!digits) { return []; }
    const strMap = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let res = [''];
    for(let i of digits.split("")){
        let hh = [];
        for(let k of res){
            for(let m of strMap[i]){
                hh.push(k+m)
            }
        }
        res = hh
    }
    return res
};
console.log(letterCombinations("253"))
// for(let j of 'ssssa'){
//     console.log(j)
// }
