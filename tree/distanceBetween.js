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

function distBetween(root, a, b) {
    let lca = LCA(root, a, b);
    return distance(lca, a) + distance(lca, b) - 2;
}

function distance(root, x) {
    if (root == null) {
        return 0;
    }
    if (root.data == x) {
        return 1;
    }
    const leftDistance = distance(root.left, x);
    const rightDistance = distance(root.right, x);

    if (leftDistance || rightDistance) {
        return 1 + (leftDistance || rightDistance);
    }
    return 0;
}

let root = createTree(
    [1, 2, 3, null, 4, 5, 6, null, null, null, null, 7, 8],
    0
);
distBetween(root, 4, 8);
distBetween(root, 7, 6);