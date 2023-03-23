class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let preIndex = 0;
function CreateBinaryTree(preorder, Inorder, instart, inEnd) {
    if(instart > inEnd){
        return;
    }

    let node = new TreeNode(preorder[preIndex++]);
    if (instart == inEnd) return node;
        
    let s = instart;
    for(;s<inEnd;s++){
        if(node.data == Inorder[s]){
            break;
        }
    }

    node.left = CreateBinaryTree(preorder,Inorder,instart,s-1);
    node.right = CreateBinaryTree(preorder,Inorder,s+1,inEnd);

    return node;

}


let tree = CreateBinaryTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7], 0, 5);
console.log(tree);








