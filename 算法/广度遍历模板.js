//广度遍历模板 从1到n 全排列 全排列类问题的深度遍历 递归
var BFS = function (n) {
    let res = [];
    let quene = [];
    for(let i=1;i<=n;i++){
        quene.push([i]);
        while (quene.length>0){
            let fir = quene.shift();
            if(fir.length==n){
                res.push(fir.join(''));
                continue;
            }
            for(let j=1;j<=n;j++){
                if(fir.indexOf(j)==-1){
                    quene.push(fir.concat(j));
                }
            }
        }
    }
    return res
};
console.log(BFS(3));
