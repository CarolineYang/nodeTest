//类其实就是个function
function TestClass1(obj) {
    this.prop1 = obj.prop1;
    this.prop2 = obj.prop2;
}
TestClass1.prototype.foo=function () {
    console.log(this)
};
// exports.TestClass1=TestClass1;

module.exports=TestClass1
