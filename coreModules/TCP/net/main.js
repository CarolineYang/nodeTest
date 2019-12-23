var net=require('net')
var server=new net.Server({
    port:8989
},(socket)=>{
    console.log('sha')
});
// server.createServer((socket)=>{
//     console.log(socket)
// })
server.on('connection',function (socket) {
    console.log('connection 事件：')
    socket.on('data',(data)=>{
        console.log('data',data.toString())
    })
});
server.on('error',function (err) {
    // if(err){
        console.log('err 事件：',err)
    // }
});
// 如果客户端断掉通信，这里捕获到了这个connect事件终端，但是该服务器的进程并没有终端，客户端再次建立连接，这个进程依然还能用
process.on('uncaughtException',(err)=>{
    console.log('uncaughtException事件：',err)
})
server.on('close',function (err) {
    // if(err){
    console.log('close 事件：',err)
    // }
});
server.on('listening',function (socket) {
    console.log('listening 事件：')
});
server.listen('8818','localhost',100,(socket)=>{
    console.log('listen')
});
// console.log(2**3)
// let a=[3,4,5,6,7,1,2,3,4,5,7,45,2,1,11,13]
// let c=a.filter((item)=>{
//     return item>4
// })
// let d=a.sort((a,b)=>{
//     return a-b
// })
// console.log(Math.max.apply(null,a))
// class Stack{
//     constructor(){
//         this.items=[];
//         this.count=0;
//     }
//     push(e){
//          this.items.push(e);
//          this.count++;
//     }
//     pop(){
//         this.count--;
//         return this.items.pop()
//     }
//     peek(){
//         return this.items[this.items.length-1]
//     }
//     isEmpty(){return this.items.length==0}
//     size(){return this.items.length}
//     clear(){
//         this.count=0;
//         return this.items=[]
//     }
// }
// let ni=new Stack();
// ni.push(3)
// ni.push(8)
// console.log(ni)
// ni.peek()
// console.log(ni.peek())
// let ss=[1,2,4,11]
// let sa=ss
// ss.unshift(333)
// console.log('>>>>',ss)
// let ks=[['a','b','c'],['d','e','f'],['g','h','i']]
// var sum = ks.reduce(function (prev, cur) {
//     console.log(prev,cur)
//     let kks=[]
//     prev.map((item)=>{
//         cur.map((item1)=>{
//             kks.push(item+item1)
//         })
//     })
//     return kks;
// });
// console.log(sum)
