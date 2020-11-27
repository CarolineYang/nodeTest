// [3,9,20,null,null,15,7],
//     [
//         [3],
//         [9,20],
//         [15,7]
//     ]
var levelOrder = function(root) {
    let res = [];
    const loop = (root,i)=>{
        if(root == null){
            return;
        }
        res[i]?res[i].push(root.val):res[i]=[root.val];
        let h = i++;
        loop(root.left,h);
        loop(root.right,h);
    };
    loop(root,0);
    return res;
};
