var http=require('http');
var server=http.createServer(function (req,res) {
    //需要用正则解析一下
    var path=req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
    switch (path) {
        case '/':
        case '/index':
            res.writeHead(200,{'Content-type':'text/html'});
            res.end('<h2>主页</h2>');
            break;
        default:
            res.writeHead(200,{'Content-type':'text/html'});
            res.end('<html><head><meta charset="UTF-8"><title>heiheihei</title></head><body><h1>'+path+'</h1></body></html>');
            break;
    }
}).listen(9990)
