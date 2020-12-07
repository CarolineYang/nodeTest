//提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能
//即是window的属性也是document的属性 window.location和document.location引用的是同一个对象
//window.loacation.href  .search  .port  .protocol .pathname .hash  .host  .hostname 有关url的属性
//1、查询字符串参数
function getQueryStringArgs() {
    var qs=location.search.length>0?location.search.substring(1):'';
    var args={};
    var items=qs.split('&');
    for(let i=0;i<items.length;i++){
        args[items[i].split('=')[0]]=items[i].split('=')[1]
    }
    return args
}
let hh=getQueryStringArgs();
console.log(hh);
//2、位置操作  方法三个：location.assign()==window.location==location.href location.replace() location.reload()
// location.assign()会产生历史记录 location.replace()不会产生历史记录，后退按钮禁用状态，相当于替换当前页面
// location.reload()（有可能从缓存中加载）重新加载(location.reload(true)从服务器重新加载)
//location属性 hash host hostname(服务器名称www.baidu.com)  href 完整的url  pathname路径名字目录或者文件名字相当于路由的具体后面那个地址
//port 端口 protocol协议（一般就是http:或者https:）  search 返回url的查询字符串以问号开头的
// location.replace('http://www.baidu.com')
