//二分法查找
var longestCommonPrefix = function(strs) {
    if(strs.length == 0){
        return ''
    }
    if(strs.length==1){
        return strs[0]
    }
    let l=0,r=strs[0].length,mid;
    while(l<r){
        mid = ~~((l+r)/2);
        let k = true;
        let ss = strs[0].substring(l,mid+1);
        if(ss==""){
            break;
        }
        strs.map(function (val) {
            if(val.substring(l,mid+1)!= ss){
                k = false;
            }
        });
        if(k){
            l = mid+1;
        }else{
            r = mid;
        }
    }
    return strs[0].substring(0,l)
};
// 分治 递归思想
var longestCommonPrefix2 = function(strs) {
    if(strs.length == 0){
        return ''
    }
    if(strs.length==1){
        return strs[0]
    }
    if(strs.length == 2){
        let kk ='';
        for(let i=0;i<strs[0].length;i++){
            if(strs[1].substring(i,i+1) == strs[0].substring(i,i+1)){
                kk=strs[1].substring(0,i+1)
            }else{
                break;
            }
        }
        return kk
    }
    let res = '';
    for(let i=0;i<strs.length;i++){
        if(i==0){
            res = longestCommonPrefix2([].concat(strs.slice(i,i+2)));
        }else{
            res = longestCommonPrefix2([res].concat(strs.slice(i,i+1)));
        }

    }
    return res;
};
console.log(longestCommonPrefix2(["flower","flow","flight"]))
