function TreeNode(val) {
    this.val = val;
    this.children = [];
}
let obj = {
    val:1,
    children:[
        {
        val:2,
        children:[{val:5,
        children:[{val:11},{val:12}]
        },{val:6}]
        },
        {
        val:3,
        children: [{val:7},{val:8}]
        },
        {
        val:4,
        children:[{val:9},{val:10}]
        }
    ]
}
function f(arr,i,res) {
    for(let key of arr){
        // console.log('s',arr)
        if(Array.isArray(res[i])){
            res[i].push(key.val);
        }else{
            res[i] = [key.val];
        }
        if(key.children && key.children.length>0){
            let h = i+1;
            f(key.children,h,res)
        }else{
            continue;
        }
    }
}
function aa(obj){
    let res = [];
    f([obj],0,res);
    return res
}
console.log(aa(obj))


function func(root){
    let queue = [root];
    let res = [];
    while(queue.length>0){
        let node = queue.shift();  // 这里最开始把unshift记成队头弹出，爆栈了，向面试官申请用vscode调试一步一步测才发现，-_-||
        res.push(node.val);
        if(node.children !== undefined){
            node.children.forEach(v=>queue.push(v))
        }
    }
    return res
}

const res = func(obj)
console.log(res)
