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

function searchBST(root, value) {
    if (root == null) return;
    if (root.data == value) return root;

    if (root.data > value) return searchBST(root.left, value);
    return searchBST(root.right, value);
}

function inorder(root) {
    if (root == null) return;

    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
}

let root = createTree([15, 12, 18, 11, 13, 19, 22], 0);
console.log(searchBST(root, 22));

root = createTree([10, 7, 12, 6, 9, 11, null, 5,], 0);
inorder(root);
