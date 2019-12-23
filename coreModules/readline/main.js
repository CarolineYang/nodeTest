var readline=require('readline');
// console.log(process)
var r1=readline.createInterface(process.stdin,process.stdout);
//设置提示语句
r1.setPrompt('请输入>')
//输出提示语句，然后等待用户输入
r1.prompt();
//处理line事件，当用户输入一些内容，敲回车键的时间，触发这个事件
r1.on('line',(cmd)=>{
    console.log('你刚刚输入了：',cmd);
    //其实不调用 prompt也可以重复得到，但是就不会得到那个setPrompt提示的内容的
    r1.prompt();
});
r1.on('close',()=>{
    console.log('close event')
})

