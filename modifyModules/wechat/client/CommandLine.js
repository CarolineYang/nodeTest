var r1=require('readline');
var util=require('util');
var eventEmitter=require('events')
var r=r1.createInterface(process.stdin,process.stdout);
function CommandLine(cmd) {
    this.readline=r;
    this.readline.setPrompt('Wechat>');
    this.readline.on('line',(input)=>{
        console.log(`接收到：${input}`);
        //TODO: 处理命令行输入
        // switch (input) {
        //     case
        // }
        this.readline.emit('inputa','ss');
    })

}
CommandLine.prototype.start =  function(){
    // console.log('ss',this)
    this.readline.prompt();
};
util.inherits(CommandLine,eventEmitter);
module.exports=CommandLine;
