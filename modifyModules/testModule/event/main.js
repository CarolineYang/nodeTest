const CustonClass=require('./TestClass1')
var cls=new CustonClass({
    prop1:'qq',
    prop2:'ee'
});
cls.once('hhh',function () {
    console.log('hhh once')
});
cls.on('hhh',function () {
    console.log('hhh')
});
cls.foo()
cls.foo()
// cls.emit('hhh')
