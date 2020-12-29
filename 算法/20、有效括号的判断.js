
// 利用栈。
// 遇到左括号，一律推入栈中，
// 遇到右括号，将栈顶部元素拿出，如果不匹配则返回 false，如果匹配则继续循环。
//
// 为了提高性能, 在循环前进行这一步：let len = s.length是非常关键的，减少了计算次数。
// 为了提高执行时间，这一步if (len%2) return false是非常关键的，减少了不必要的计算。
//
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
//
// 有效字符串需满足：
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
//
// 示例 1:
//
// 输入: "()"
// 输出: true
// 示例 2:
//
// 输入: "()[]{}"
// 输出: true

var isValid = function(s) {
    let arr = []
    let len = s.length
    if (len%2) return false
    for (let i = 0; i < len; i++) {
        let letter = s[i]
        switch(letter) {
            case "(": {
                arr.push(letter);
                break;
            }
            case "[": {
                arr.push(letter);
                break;
            }
            case "{": {
                arr.push(letter);
                break;
            }
            case ")": {
                if (arr.pop() !== "(") return false;
                break;
            }
            case "]": {
                if (arr.pop() !== "[") return false;
                break;
            }
            case "}": {
                if (arr.pop() !== "{") return false;
                break;
            }
        }
    }
    return !arr.length

};
