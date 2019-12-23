function Message(msg) {
    this.from=msg.from;//User对象
    this.to=msg.to; //User对象,如果没有指定to，表示消息发给所有人
    this.content=msg.content;
    this.createTime=msg.createTime;
}

module.exports=Message;
