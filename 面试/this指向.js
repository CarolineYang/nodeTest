var o1 = {
    text:'o1',
    fn:function () {
        console.log(this.text)
    }
};
var o2 = {
    text:'o2',
    fn:function () {
        return o1.fn()
    }
};
var o3 = {
    text:'o3',
    fn:function () {
        var f2 = o1.fn;
        return f2()
    }
}
o1.fn();
o2.fn();
o3.fn();
// console.log(o2.fn());
// console.log(o3.fn());