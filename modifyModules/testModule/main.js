//通过模块名字加载 要把这个js模块放在node_modules里
var foo=require('test')
foo.foo()
// 相对路径 先找文件名 再找test文件夹 下面的默认index文件
var foo2=require('./test')
foo2.foo()
var foo3=require('/testIndex')
foo3.foo()
