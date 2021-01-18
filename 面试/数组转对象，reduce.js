let arr2 = [
    {
        name:'ypp',
        age:10
    },
    {
        name:'ddd',
        age:20
    },
    {
        name:'ccc',
        age:30
    }
];
let res = arr2.reduce((prev, next) => {
         prev[next.name] = next;
         return prev
     }, {})
console.log(res);
const a = [1, 2, 3, 4, 5]
const sum = a.reduce((pre, item) => {
    console.log(item)
    return pre + item
},0)
console.log(sum);
const str = 'jshdjsihh';
const obj = str.split('').reduce((pre,item) => {
    pre[item] ? pre[item] ++ : pre[item] = 1
    return pre
},{})
console.log(obj) // {j: 2, s: 2, h: 3, d: 1, i: 1}

var data = [{
    id: 1,
    name: "办公管理",
    pid: 0,
    children: [{
        id: 2,
        name: "请假申请",
        pid: 1,
        children: [
            { id: 4, name: "请假记录", pid: 2 },
        ],
    },
        { id: 3, name: "出差申请", pid: 1 },
    ]
},
    {
        id: 5,
        name: "系统设置",
        pid: 0,
        children: [{
            id: 6,
            name: "权限管理",
            pid: 5,
            children: [
                { id: 7, name: "用户角色", pid: 6 },
                { id: 8, name: "菜单设置", pid: 6 },
            ]
        }, ]
    },
];
const arr = data.reduce(function(pre,item){
    const callee = arguments.callee //将运行函数赋值给一个变量备用
    pre.push(item)
    if(item.children && item.children.length > 0) item.children.reduce(callee,pre); //判断当前参数中是否存在children，有则递归处理
    return pre;
},[]).map((item) => {
    item.children = []
    return item
})
console.log(arr)