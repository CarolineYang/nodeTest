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
// o1.fn();
// o2.fn();
// o3.fn();
// console.log(o2.fn());
// console.log(o3.fn());
var obj = {
    name: 'obj',
    hello() {
        console.log(this.name)
    },
    say:function () {
        console.log(this.name)
    }
}
var h = obj.hello;
h();
obj.say();

var obj2 = {
    name:'obj2',
    hi(){
        return () => {
            console.log(this.name)
        }
    },
    say(){
        return function () {
            console.log('s',this,this.name)
        }
    }
}
var h2 = obj2.hi()
h2()
obj2.say()()
// 结果
// obj