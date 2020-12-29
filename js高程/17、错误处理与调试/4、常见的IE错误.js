// 1、操作终止
//还未渲染完就终止了 用insertBefore（）代替appendChild（）
//或者吧script标签当做body的子元素
// url不能超过2048个字符  全都是ie
let a =[1,2];
a.reverse();
console.log(a)
