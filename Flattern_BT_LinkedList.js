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

function flattern(root){
    let prev = null;
    const traverse = (root) =>{
        if(!root) return;

        traverse(root.right);
        traverse(root.left);

        root.left = null;
        root.right = prev;
        prev = root;
    }
    traverse(root);
    return root;
}

let Btree = CreateBinaryTree([1,2,5,3,4,null,6],0);
console.log(flattern(Btree));






