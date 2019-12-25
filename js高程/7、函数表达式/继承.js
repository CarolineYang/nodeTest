function Clas(name){
    this.name=name;
}
Clas.prototype.sayHis=()=>{
    //箭头函数 this指向上下文 并不指向构造函数
    console.log('sayhi   '+this.name)
}
console.log(Clas.prototype.constructor==Clas)
Clas.prototype.sayHis=function(){
    console.log('sayhi   '+this.name)
}
var app=new Clas('ypp');
app.sayHis()
