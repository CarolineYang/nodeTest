var http=require('http');
var w=require('express');
var server=http.createServer((req,res)=>{
    console.log(req.url)
    res.writeHead(200,{'Content-type':'text/plan'});
    var kk=[1,23]
    console.log(...kk)
    res.end(kk.toString())
});
server.listen(9999)
console.log('启动服务器，端口9999')
//功能没有apache那么强大，后台就是用js写的
