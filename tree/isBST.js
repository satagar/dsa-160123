class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function createTree(arr, i) {
    if (i >= arr.length || arr[i] == null) return;
    let node = new Node(arr[i]);

    node.left = createTree(arr, 2 * i + 1);
    node.right = createTree(arr, 2 * i + 2);

    return node;
}

function inorder(root) {
    if (root == null) return;

    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
}

function isBST(root) {
    return bstHelper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function bstHelper(root, min, max) {
    if (root == null) return true;
    if (root.data < min || root.data > max) return false;

    return bstHelper(root.left, min, root.data) && bstHelper(root.right, root.data, max);
}

let root = createTree([10, 7, 12, 6, 9, 11, null, 5], 0);
inorder(root);
isBST(root);

void (root = createTree([5, 1, 4, null, null, 3, 6], 0));
isBST(root);
