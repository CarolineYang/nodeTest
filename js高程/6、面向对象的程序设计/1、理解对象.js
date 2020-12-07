var a = {
    name:'ypp',
    edit:1,
    _year:2004
};
Object.defineProperty(a,'year',{
    get:function(){
        return this._year
    },
    set:function(v){
        if(v>2004){
            console.log(this)
            this._year = v;
            this.edit += v-2004;
        }
    }
});
a.year = 2006;
console.log(a.edit);
//只定义get 是不能进行set设置的，所以names无法修改属性值
Object.defineProperty(a,'names',{
    get:function(){
        return this.name
    }
});
a.names = 'cll';
console.log(a.names)
//只定义set  可以重新对该属性赋值，但是却无法读取出来该属性
Object.defineProperty(a,'namess',{
    set:function(v){
        return this.name+v;
    }
});
a.namess = 'cll';
console.log(a.namess);
Object.defineProperties(a,{
    sayhi:{
       get:function () {
           console.log('d');
           return 'hello'+this.name;
       },
        set:function(v) {

        }
    },
    cunyear:{
        writable:true,
        value:'hhhhhh'
    }
});
console.log(a.cunyear,a.sayhi);
