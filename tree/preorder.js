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

    node.left = createTree(arr, (2 * i) + 1);
    node.right = createTree(arr, (2 * i) + 2);

    return node;
}

function preorder(root) {
    if (root == null) return;

    console.log(root.data);
    preorder(root.left);
    preorder(root.right);
}

let root = createTree([10, 20, 30, 40, 50, null, 60], 0);
preorder(root);

