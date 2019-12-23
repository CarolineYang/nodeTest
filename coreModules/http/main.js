var http=require('http');
var fs=require('fs')
var cheerio=require('cheerio')

// http.createServer(()=>{
//
// });
//爬虫？
http.get('http://nodejs.cn/api/http.html',(res)=>{
    // console.log(res)
//    res其实是个流
    var data=''
    res.on('data',(chunk)=>{
        data+=chunk
    })
    res.on('end',function () {
        var $=cheerio.load(data);
        console.log($('title').first().text());
        // console.log(data)
        // fs.writeFile('./index.html',data,()=>{
        //     console.log('chengg')
        // })
    })
})
