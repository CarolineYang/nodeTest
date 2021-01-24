function getUrlParam(sUrl, sKey) {
    let target = sUrl.split('?')[1].split('#')[0].split('&');
    let obj = {}
    for(let i=0;i<target.length;i++){
        if(obj[target[i].split('=')[0]]){
            obj[target[i].split('=')[0]].push(target[i].split('=')[1])
        }else{
            obj[target[i].split('=')[0]] = [target[i].split('=')[1]]
        }
    }
    // 获取 url 中的参数
    // 1. 指定参数名称，返回该参数的值 或者 空字符串
    // 2. 不指定参数名称，返回全部的参数对象 或者 {}
    // 3. 如果存在多个同名参数，则返回数组
    if(obj[sKey] && sKey){
        return obj[sKey].length>1?obj[sKey]:obj[sKey].toString()
    }else if(sKey && !obj[sKey]){
        return ""
    }else if(!sKey){
        for(let key in obj){
            if(obj[key].length<=1){
                obj[key] = obj[key].toString()
            }
        }
        return obj
    }
}
console.log(getUrlParam("http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe",'test'))