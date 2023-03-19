class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function CreateBinaryTree(arr, i) {
    if (arr.length <= i || arr[i] == null) {
        return;
    }
    let node = new TreeNode(arr[i]);
    node.left = CreateBinaryTree(arr, (2 * i) + 1);
    node.right = CreateBinaryTree(arr, (2 * i) + 2);
    return node;
}


function isBST(root, min, max) {
    if (root == null) {
        return true;
    }
    if (root.data < min || root.data > max) {
        return false;
    }
    return isBST(root.left, min, root.data) && isBST(root.right, root.data, max);
}


let bt = CreateBinaryTree([1, 2, 3, null, 6, 4, 5, null, null, null, 7], 0);
console.log(isBST(bt, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER));





