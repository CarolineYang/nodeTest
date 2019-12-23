var h=require('dgram');
var client=h.createSocket('udp4');
// var msg='11'
var CommandLine=require('./CommandLine');
var Message=require('../Message');
var User=require('../User');


var cmd=new CommandLine();

var currentUser=new User({
    name:process.argv[2],
    age:process.argv[3],
    ip:'localhost',
    port:process.argv[4]

});
var toUser=new User({
    name:process.argv[4],
    age:process.argv[5]
});
cmd.on('inputa',(msg)=>{
    console.log('input=',msg)
    var  message=new Message({
        from:currentUser,
        // to:toUser,
        content:msg,
        createTime:new Date()
    });
    var msgString=JSON.stringify(message)
    client.send(msgString,0,msgString.length,33212,'localhost',()=>{
        console.log('发送到服务器成功',msgString)
    })
});
client.on('listening',function () {
    cmd.start();
});
client.bind(currentUser.port);
