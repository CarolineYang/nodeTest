var fs=require('fs');
// fs.open()
//默认读文件是异步的
fs.readFile('D:/test.txt','UTF-8',(err,data)=>{
    console.log(data)
})
// //这个报错了 先一步回来 先一步排到了事件队列里 （回调噩梦怎么办啊唉！！！）
// fs.readFile('D:/test1.txt','UTF-8',(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
// })
// //同步读文件
// console.log('ssssssssss',fs.readFileSync('D:/test.txt').toString())
// //异步写文件，这个东西好像会替换到已有的文件 但是是先写了，然后这个第一个异步读文件的内容再回来的就是写进去的（得有权限）
// fs.writeFile('D:/test.txt','2222222222222',(err)=>{
//     console.log(err?err:'success')
// })
// //读取文件状态和基本信息，如创建时间，文件大小等，可以用来判断一个文件是否存在  基本上fs里的所有回调函数，第一个参数都是err
// fs.stat('D:/test.txt',(err,stats)=>{
//     console.log(err?err:stats)
// })
// //异步读取文件夹 返回的是该文件夹下的目录
// fs.readdir('D:',(err,files)=>{
//     console.log(err?err:files)
// })
// //监视文件，文件发生变化才会触发
// fs.watchFile('D:/test.txt',(cur,files)=>{
//     console.log(cur.size,files.size)
// })
