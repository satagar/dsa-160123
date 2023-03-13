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
function Search(root,k){
    if(root == null){
        return false;
    }
    if(root.data == k){
        return true;
    }
    return Search(root.left,k) || Search(root.right,k);
}

let Btree = CreateBinaryTree([1,2,3,4,5,6,7,8],0);
console.log(Search(Btree,8));
console.log(Search(Btree,80));







