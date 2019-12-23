const dgram=require('dgram');
//udp4 是协议的版本号 看文档
const server=dgram.createSocket('udp4');
server.bind(9999);
//rinfo 对方的地址
server.on('message',(msg,rinfo)=>{
    console.log('接到消息：',msg.toString());
    console.log('来紫玉：',rinfo);
})
server.on('listening',()=>{
    console.log('服务器开始监听')
});
//端口的范围是65535  是一个短整型的数字shortInt 1到1000以内的端口一般都是系统用的一些端口
