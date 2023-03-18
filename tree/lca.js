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

function LCA(root, a, b) {
    if (root == null || root.data == a || root.data == b) {
        return root;
    }

    const left = LCA(root.left, a, b);
    const right = LCA(root.right, a, b);

    if (left && right) {
        return root;
    }
    return left || right;
}

let root = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 0);
LCA(root, 7, 4);
