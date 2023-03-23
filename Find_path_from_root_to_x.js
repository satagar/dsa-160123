class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function CreateBinaryTree(arr,i){
    if(arr.length <= i || arr[i] == null){
        return;
    }
    let node = new TreeNode(arr[i]);
    node.left = CreateBinaryTree(arr,(2*i) + 1);
    node.right = CreateBinaryTree(arr,(2*i) + 2);
    return node;
}


function find(root,val){
    if(root == null){
        return;
    }
    if(root.data == val){
        console.log(root.data);
        return true;
        
    }

    if(find(root.left,val)){
        console.log(root.data);
        return true;
    }else if(find(root.right,val)){
        console.log(root.data);
        return true;
    }
    return false
}

let Btree = CreateBinaryTree([1,2,3,4,5,6,7,8],0);
find(Btree,6);






