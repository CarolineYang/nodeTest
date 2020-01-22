// 1、不可扩展对象
var person={
    name:'Nicholas',
    address:'hebei'
};
//不能给对象添加新的属性和方法了 但是可以删除and修改啊
Object.preventExtensions(person);
person.age=30;
delete person.address
console.log(person,Object.isExtensible(person))
//2、密封的对象  不可扩展，并且已有成员的configurable特性被设置为false。这意味着不能删除属性和方法但是可以修改，因为不能使用Object.defineProperty()把属性修改为访问器属性。
var pr={
    name:'ypp',
    address:'hebei'
};
Object.seal(pr);
pr.name='new name';
pr.age=30;
delete pr.address
for(let key in pr){
    console.log(key)
}
console.log(pr,Object.isSealed(pr));
//3、冻结的对象 不能修改和添加 和删除 增删改都不行
var prs={
    name:'ypp',
    address:'hebei'
};
Object.freeze(prs);
prs.name='new name';
prs.age=30;
delete prs.address
for(let key in prs){
    console.log(key)
}
console.log(prs,Object.isFrozen(prs));
