class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

//Time Complexity is O(n^2) bcz in left skewed or right skewed.
// let preIndex = 0;
// function CreateBinaryTree(preorder, Inorder, instart, inEnd) {
//     if(instart > inEnd){
//         return;
//     }

//     let node = new TreeNode(preorder[preIndex++]);
//     if (instart == inEnd) return node;

//     let s = instart;
//     for(;s<inEnd;s++){
//         if(node.data == Inorder[s]){
//             break;
//         }
//     }

//     node.left = CreateBinaryTree(preorder,Inorder,instart,s-1);
//     node.right = CreateBinaryTree(preorder,Inorder,s+1,inEnd);

//     return node;

// }

let prestart = 0;
let map = new Map();

function CreateBinaryTree(preorder, Inorder, instart, inEnd) {
    if (instart > inEnd) {
        return;
    }
    let node = new TreeNode(preorder[prestart++]);

    if (instart == inEnd) {
        return node;
    }

    let s = map.get(node.data);

    node.left = CreateBinaryTree(preorder, Inorder, instart, s - 1);
    node.right = CreateBinaryTree(preorder, Inorder, s + 1, inEnd);

    return node;
}

function CreateTree(Preorder, Inorder, instart, inEnd) {
    for (let i = 0; i < Inorder.length; i++) {
        map.set(Inorder[i], i);
    }
    return CreateBinaryTree(Preorder, Inorder, instart, inEnd);
}


let tree = CreateTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7], 0, 5);
console.log(tree);








