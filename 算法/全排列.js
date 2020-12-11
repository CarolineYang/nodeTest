// BFS 广度遍历 不标准
var qunpai = function (n,k) {
    let ans = [];
    for(let i=1;i<=n;i++){
        ans.push([i]);
    }
    let res = [];
    for(let i=0;i<ans.length;i++){
        let kk = ans.shift();
        for(let j=1;j<=n;j++){
            if(kk.indexOf(j)==-1){
                if(kk.concat([j]).length==n ){
                    res.push(kk.concat([j]));
                    if(res.length == k){
                        return kk.concat([j]).join('')
                    }
                }
                ans.push(kk.concat([j]))
            }
        }
        i--;
    }
};
console.log(qunpai(3,3));

//dfs 深度遍历

var DFS = function (n,k) {
    let res = [];
    let unset = new Set();
    let r;
    const loop = (path)=>{
        if(path.length == n){
            res.push(path.slice());
            if(res.length == k){
                r= path.slice().join('');
                return true;
            }
            return false;
        }
        for(let i=1;i<=n;i++){
            if(unset.has(i)){
                continue;
            }
            path.push(i);
            unset.add(i);
            kk = loop(path);
            if(kk){
                return r
            }
            path.pop();
            unset.delete(i);
        }
    }
    loop([]);
    return r;
};
console.log(DFS(5,5))
