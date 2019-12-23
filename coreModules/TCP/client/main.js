var net=require('net');
var client=new net.Socket();
client.connect(8818,'localhost',()=>{
    console.log('连接成功！')
    client.write('123你好，杨萍萍','UTF8',(data)=>{
        console.log('成功给服务器发消息',data)
    })
});
// //不能再这里写 因为是异步连接
// client.write('123','utf-8',(data)=>{
//     console.log(data)
// })
