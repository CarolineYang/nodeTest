var openLock = function(deadends, target) {
    var AOne = function (s,j) {
        let arr =s.split('')
        if(arr[j] == '9'){
            arr[j]='0';
        }else{
            arr[j] = (parseInt(arr[j])+1).toString();
        }
        return arr.join('')
    };
    var MOne = function (s,j) {
        let arr =s.split('');
        if(arr[j] == '0'){
            arr[j]='9';
        }else{
            arr[j] = (parseInt(arr[j])-1).toString();
        }
        return arr.join('')
    };
    let deads = new Set();
    for(let i=0;i<deadends.length;i++){
        deads.add(deadends[i])
    }
    let visited = new Set();
    let step = 0;
    let q = [];
    q.push('0000');
    visited.add('0000');
    while(q.length>0){
        let qu = q.length;
        for(let j=0;j<qu;j++){
            let cur = q.shift();
            if(deads.has(cur)){
                continue;
            }
            if(cur == target){
                return step;
            }
            for(let i=0;i<4;i++){
                let down = MOne(cur,i);
                let up= AOne(cur,i);
                if(!visited.has(down)){
                    q.push(down);
                    visited(down);
                }
                if(!visited.has(up)){
                    q.push(up);
                    visited(up);
                }
            }
        }
        step ++;
    }
    return -1;
};
