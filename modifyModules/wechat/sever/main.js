var dgram=require('dgram');
var server=dgram.createSocket('udp4');
var userList={};
server.on('message',(msg,rinfo)=>{
    console.log('接收到的消息:'+msg)
    console.log(rinfo)
    var obj=JSON.parse(msg);
    userList[obj.from.name]=obj.from;
    if(!obj.to){
        // if()
        //群聊
        for(var name in userList){
            var user=userList[name];
            if(name!=obj.from.name){
                server.send(msg,0,msg.length,user.port,user.ip,()=>{
                    console.log(obj.from.name+' send to '+name)
                })
            }

        }


    }else{
        //私信 转发
        server.send(msg,0,msg.length,obj.to.port,obj.to.ip,()=>{
            console.log(obj.from.name+'send tdddddo '+obj.to.name)
        })
    }


});

server.on('listening',()=>{
    console.log('服务器开始监听！')
});
server.bind(33212);

