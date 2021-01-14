function jsonp(url,data,callback) {
    var funcName = 'jsonp_' + Date.now() + Math.random().toString().substr(2, 5);
    //如果存在其他传入参数，需要进行拼接
    let query ;
    if (typeof data === 'object') {
        var tempArr = [];
        for (var key in data) {
            var value = data[key]
            tempArr.push(key + '=' + value)
        }
        query = tempArr.join('&')
    }
    var script = document.createElement('script');
    script.src = url + '?' + query + '&callback= ' + funcName;
    document.appendChild(script);
    window[funcName] = function(data){
        callback(data);
        //清除全局函数和script标签
        delete window[funcName];
        document.removeChild(script)
    }
}
jsonp('',{},function (res) {
    console.log(res)
})
// 服务器端
// 1. 获取参数, 拿到回调函数名称
// 2. 返回参数名的前端回调的调用 并 把要返回的参数作为实参调用

/*弊端 - 只支持get请求,并且不安全,需要服务器支持*/
