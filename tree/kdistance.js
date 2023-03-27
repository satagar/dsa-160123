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

let result = [];

function distanceK(root, target, k) {
    if (root == null) return -1;

    if (root.data == target) {
        process_subtree(root, 0, k);
        return 1;
    }
    else {
        let left = distanceK(root.left, target, k);
        let right = distanceK(root.right, target, k);

        if (left != -1) {
            if (left == k) result.push(root.data);
            process_subtree(root.right, left + 1, k);
            return left + 1;
        }
        else if (right != -1) {
            if (right == k) result.push(root.data);
            process_subtree(root.left, right + 1, k);
            return right + 1;
        }
        return -1;
    }
}

function process_subtree(node, dist, k) {
    if (node == null) return;

    if (dist == k) {
        result.push(node.data);
    }
    else {
        process_subtree(node.left, dist + 1, k);
        process_subtree(node.right, dist + 1, k);
    }
}

let root = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 0);
distanceK(root, 5, 2);
console.log(result);