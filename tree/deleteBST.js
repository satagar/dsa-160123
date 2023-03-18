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
    }

    if (root.data > value) {
        root.left = insertBST(root.left, value);
    } else {
        root.right = insertBST(root.right, value);
    }

    return root;
}

function deleteBST(root, value) {
    if (!root) return null;
    if (root.data == value) {
        if (root.left == null && root.right == null) {
            return null;
        }
        else if (root.left == null || root.right == null) {
            return root.left == null ? root.right : root.left;
        }
        else {
            root.data = findMin(root.right);
            root.right = deleteBST(root.right, root.data);
        }
    }

    root.left = deleteBST(root.left, value);
    root.right = deleteBST(root.right, value);

    return root;
}

function findMin(root) {
    if (root.left != null) {
        return findMin(root.left);
    }
    return root.data;
}

function inorder(root) {
    if (root == null) return;

    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
}

let root = createTree([8, 3, 10, 1, 6, null, 14, null, null, 4, 7], 0);
inorder(root);
deleteBST(root, 4);
inorder(root);
deleteBST(root, 6);
inorder(root);
deleteBST(root, 3);
inorder(root);
