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


function findLCA(root,p,q){
    if(root == null){
        return;
    }
    if(root.data == p || root.data == q){
        return root;
    }

    const left = findLCA(root.left,p,q);
    const right = findLCA(root.right,p,q)

    if(left && right) return root;
    if(left || right) return left || right;
    
}

let Btree = CreateBinaryTree([1,2,3,4,5,6,7,8],0);
console.log(findLCA(Btree,1,8)); //1
console.log(findLCA(Btree,6,7)); //3






