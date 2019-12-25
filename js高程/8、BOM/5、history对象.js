//一个属性 三个方法
// history.go(2)//前进两页
// history.go(-1)//倒退一页
// history.go('www.baidu.com')//去到最近的百度页面
history.back();//倒退一页
// history.forward();//前进1页
if(history.length==0){
//    这应该是用户打开窗口后的第一个页面
}
console.log(history.length)
