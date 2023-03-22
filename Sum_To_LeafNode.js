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

function sum(root,acc){
    if(!root) return 0;

    if(root.left == null && root.right == null){
        return acc * 10 + root.data;
    }

    
    let val1 = sum(root.left,acc * 10 + root.data);
    let val2 = sum(root.right,acc * 10 + root.data);

    return val1+val2;

}

let Btree = CreateBinaryTree([4,9,0,5,1],0);
console.log(sum(Btree,0));






