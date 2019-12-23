var event=require('events');
var util=require('util');

const e=new event()
// e.on('click',function (a,b) {
//     console.log('hello Caroline Yang!')
//     console.log(a, b, this, this === e)
// });
// e.emit('click','aa','bb')
// process.on('exit',function () {
// console.log('onnnnn')
// })
// console.log('898989')
// setTimeout(()=>{
//     console.log('yibu')
// },2000)
function TestClass1(obj) {
    this.prop1 = obj.prop1;
    this.prop2 = obj.prop2;
}
TestClass1.prototype.foo=function () {
    this.emit('hhh')
    // console.log(this)
};
//第一个继承了第二个的属性
util.inherits(TestClass1,event);

module.exports=TestClass1
