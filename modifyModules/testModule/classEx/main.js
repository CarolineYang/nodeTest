var testClass=require('./testClass');
var testObj= new testClass({
    prop1:'ss',
    prop2:'aaa'
})
testObj.foo()
// testObj.on('jj',function () {
//     console.log('jj')
// })
// testObj.emit('jj')
console.log(testObj.prop1)
// var test=new testClass
global.a=1;
a=2;
var a;
a=3;
// var b;
b=3;
console.log(global.a)
