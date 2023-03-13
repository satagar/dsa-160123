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
function IsSymmetric(root1,root2){
    if(root1 == null && root2 == null){
        return true;
    }else if(root1.data != root2.data){
        return false;
    }
    return IsSymmetric(root1.left,root2.right) && IsSymmetric(root1.right,root2.left);
}

let Btree1 = CreateBinaryTree([1,2,3,4,5,6,7,8],0);
let Btree2 = CreateBinaryTree([1,2,2,3,4,4,3],0);
console.log(IsSymmetric(Btree1,Btree1));
console.log(IsSymmetric(Btree2,Btree2));







