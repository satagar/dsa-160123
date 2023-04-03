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


function findNumberEdges(root,p,q){
    if(root == null){
        return 0;
    }
    if(root.data == p || root.data == q){
        
    }
    let left  = 0;
    let right = 0;
    left += findNumberEdges(root.left,p,q);
    right += findNumberEdges(root.right,p,q);

    return left+right

    
}

let Btree = CreateBinaryTree([1,2,3,4,5,6,7,8],0);
console.log(findNumberEdges(Btree,1,8)); //3
console.log(findNumberEdges(Btree,6,7)); //2






