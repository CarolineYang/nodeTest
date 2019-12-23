var http = require('http');
var fs=require('fs');
var a=require('./a');
var aa=require('./a');
//多次加载相同模块 是有缓存的 不会调用两次的 第一次加载的时候会执行一遍加载的文件然后再顺序执行非异步操作 然后吧异步操作放在哪个事件队列里
var b=require('./modifyModules/b')
// var server = http.createServer(function (req, res) {
//     if (req.url == "/") {
//         res.end("Hello world!");
//     }
// });
// server.listen(8000);
http.createServer(function (request, response) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);
fs.readFile('D:/test.txt',function (err,file) {
    if(err){
        console.log("??????")
        throw err
    }
    console.log(file.toString())
})
a.haha()
console.log('hellp',a,a==aa,b)
