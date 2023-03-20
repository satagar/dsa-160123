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

function printPath(root, value) {
    if (root == null) return false;

    if (root.data == value) {
        console.log(root.data);
        return true;
    }

    if (printPath(root.left, value)) {
        console.log(root.data);
        return true;
    }
    else if (printPath(root.right, value)) {
        console.log(root.data);
        return true;
    }
    return false;
}

let root = createTree([1, 2, 3, 4, 5, 6, 7], 0);
printPath(root, 5);
