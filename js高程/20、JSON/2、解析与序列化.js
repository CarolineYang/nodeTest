//2、序列化选项
var json={
    "name":"ypp",
    "age":29,
    "address":"changPing",
    "date":new Date(2011,11,11)
}
console.log(JSON.stringify(json,["name"]))
console.log(JSON.stringify(json,function (key,value) {
    if(key=="name"){
        return 'nic'
    }else{
        return value
    }
}))
//第三个参数 字符缩进  第二个参数是序列化筛选
console.log(JSON.stringify(json,null,'--'));
console.log(JSON.stringify(json,null,6));
//3、toJSON()方法

var json1={
    "name":"ypp",
    "age":29,
    "address":"changPing",
    toJSON:function () {
        return this.name;
    }
}
console.log(JSON.stringify(json1))
//toJSON()可以作为函数过滤器的补充，理解序列化的内部顺序十分重要。
//1、如果存在toJSON()方法，并且能通过他取得有效的值，则调用该方法。否则按默认顺序执行
//2、如果提供了第二个参数，应用函数过滤器
//3、对第二部返回的每个值进行相应的序列化
//4、如果提供了第三个参数，执行相应的格式化


//3、解析选项
var kk=JSON.stringify(json);
var book=JSON.parse(kk,function (key,value) {
    if(key=="date"){
        return new Date(value)
    }else{
        return value
    }
});
console.log(book)

