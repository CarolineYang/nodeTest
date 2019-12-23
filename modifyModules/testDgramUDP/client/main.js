// 无连接 UDP相当于打电话 不管对方状态就开始说话 就是不管接通没有  反正我就往对面发送（没有tcp可靠）
var dgram=require('dgram');
var client=dgram.createSocket('udp4');

// let msg='无连接 UDP相当于打电话';
let msg=new Buffer.from('不管对方状态就开始说话 就是不管接通没有  faz ','utf8')
// 第三个参数是指的字节数，并不是字符数 所以引出了buffer 缓存
client.send(msg,0,msg.length,'9999','localhost',()=>{
    console.log('发送成功')
});
//UDP适合做大数据传输 不管服务器起没起来 它反正就开始发送
