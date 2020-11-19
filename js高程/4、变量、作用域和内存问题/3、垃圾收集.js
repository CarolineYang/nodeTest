function problem() {
    var objA = new Object();
    var objB = new Object();
    objA.some = objB;
    objB.some = objA;
}
//引用计数的弊端 这个计数都为2 永远不能清0
//不使用的时候最好再次赋值为null
