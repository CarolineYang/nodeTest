// 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
// 有效的 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效的 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效的 IP 地址。

// 输入：s = "101023"
// 输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
// 输入：s = "0000"
// 输出：["0.0.0.0"]
// 输入：s = "25525511135"
// 输出：["255.255.11.135","255.255.111.35"]
// 输入：s = "010010"
// 输出：["0.10.0.10","0.100.1.0"]
//DFS BFS 动态规划 回溯算法加枝减
var restoreIpAddresses = function(s) {
    //枝减
    if(s.length<4 || s.length>12){
        return [];
    };
    let res = [];
    const loop = (arr,begin)=>{
        let sum = 0;
        arr.map(function (val) {
            sum += val.length;
        });
        //枝减
        let maxlength = (4-arr.length)*3;
        if(s.length-sum>maxlength){
            return;
        }
        if(arr.length == 4){
            if(sum == s.length){
                res.push(arr.join('.'));
            }
            return ;
        }
        for(let i=1;i<4;i++){
            let target = s.substring(begin,begin+i);
            if(begin+i<=s.length){
                if(target.length>1 && target[0] == 0){
                    break;
                }else if(parseInt(target)>255){
                    break;
                }else{
                    arr.push(target);
                    loop(arr,begin+i);
                    arr.pop();
                }
            }else{
                break;
            }
        }
    };
    loop([],0);
    return res
};
restoreIpAddresses('101023')
