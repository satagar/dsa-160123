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

//Left,Parent,Right
function InOrder(node){
    if(node == null){
        return;
    }
    InOrder(node.left);
    console.log(node.data);
    InOrder(node.right);
}
//Parent,Left,Right
function PreOrder(node){
    if(node == null){
        return;
    }
    console.log(node.data);
    PreOrder(node.left);
    PreOrder(node.right);
}

//Left,Right,Parent
function PostOrder(node){
    if(node == null){
        return;
    }
    PostOrder(node.left);
    PostOrder(node.right);
    console.log(node.data);
}

function bfs(root){
    if(root == null){
        return;
    }
    let queue = [];
    queue.push(root);
    while(queue.length > 0){
        const node = queue.shift();
        if(node.left != null)  queue.push(node.left);
        if(node.right != null)  queue.push(node.right);
        console.log(node.data);
    }
}

let Btree = CreateBinaryTree([1,2,3,4,5,6,7,8],0);
console.log(Btree);
InOrder(Btree);
console.log('///////');
PreOrder(Btree);
console.log('///////');
PostOrder(Btree);
console.log('///////');
bfs(Btree);






