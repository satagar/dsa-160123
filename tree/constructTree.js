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

function constructTree(inorder, preorder) {
    return helper(
        inorder,
        preorder,
        0,
        inorder.length - 1,
        0,
        preorder.length - 1
    );
}

function helper(inorder, preorder, inStart, inEnd, preStart, preEnd) {
    if (inStart > inEnd || preStart > preEnd) {
        return null;
    }
    const node = new Node(preorder[preStart]);

    let i = inStart;
    for (; i <= inEnd; i++) {
        if (inorder[i] == node.data) {
            break;
        }
    }
    let leftSubTreeLength = i - inStart;
    node.left = helper(
        inorder,
        preorder,
        inStart,
        i - 1,
        preStart + 1,
        preStart + leftSubTreeLength
    );
    node.right = helper(
        inorder,
        preorder,
        i + 1,
        inEnd,
        preStart + leftSubTreeLength + 1,
        preEnd
    );

    return node;
}

function inorder(root) {
    if (root == null) return;

    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
}

let root = constructTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
inorder(root);
root = constructTree([2, 9, 4, 3, 15, 20, 7], [3, 9, 2, 4, 20, 15, 7]);
inorder(root);
