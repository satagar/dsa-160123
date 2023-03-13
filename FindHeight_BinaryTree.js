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
function findHeight(root,k){
    if(root == null){
        return -1;
    }
    return Math.max(findHeight(root.left),findHeight(root.right)) + 1;
}

let Btree = CreateBinaryTree([1,2,3,4,5,6,7,8],0);
console.log(findHeight(Btree));







