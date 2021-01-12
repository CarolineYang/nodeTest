let serialize  = (root)=>{
    if(root == null){
        return 'X'
    }
    const left = serialize(root.left);
    const right = serialize(root.right);
    return root.val+','+left+','+right;
}
let deserialize  = (data)=>{
    let list = data.split(',');
    const treeBuild = (list)=>{
        let rootVal = list.shift();
        if (rootVal == "X") {         // 是X，返回null节点
            return null;
        }
        const root = new TreeNode(rootVal); // 不是X，则创建节点
        root.left = treeBuild(list);
        root.right = treeBuild(list);
        return root;
    };
    return treeBuild(list);
}