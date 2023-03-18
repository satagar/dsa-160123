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

function insertBST(root, value) {
    if (root == null) {
        const node = new Node(value);
        return node;
    };

    if (root.data > value) {
        root.left = insertBST(root.left, value);
    }
    else {
        root.right = insertBST(root.right, value);
    }

    return root;
}

let root = createTree([15, 12, 18, 11, 13, 19, 22], 0);
console.log(searchBST(root, 14));
console.log(insertBST(root, 14));
console.log(searchBST(root, 14));
