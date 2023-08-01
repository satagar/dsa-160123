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

function post(root) {
    if (root == null) return;

    post(root.left);
    post(root.right);
    console.log(root.data);
}

let root = createTree(
    [
        10,
        20,
        70,
        30,
        null,
        80,
        90,
        null,
        40,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        50,
        60,
    ],
    0
);
post(root);
