class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function CreateBinaryTree(arr, i) {
  if (arr.length <= i || arr[i] == null) {
    return;
  }
  let node = new TreeNode(arr[i]);
  node.left = CreateBinaryTree(arr, (2 * i) + 1);
  node.right = CreateBinaryTree(arr, (2 * i) + 2);
  return node;
}
function insertBST(root, value) {
  if (root == null) {
    let node = new TreeNode(value);
    return node;
  }
  if (root.data > value) {
    root.left = insertBST(root.left, value);

  }
  else {
    root.right = insertBST(root.right, value);
  }
  return root;
}
//Left,Parent,Right
function InOrder(node) {
  if (node == null) return;

  InOrder(node.left);
  console.log(node.data);
  InOrder(node.right);

}

function SearchBST(root, value) {
  if (root == null) return;
  if (root.data == value) return root;
  if (root.data > value) return SearchBST(root.left, value);
  return SearchBST(root.right, value);

}

function deleteBST(root, value) {
  if (root == null) return;
  if (root.data == value) {
    if (root.left == null && root.right == null) {
      return null;
    }
    else if (root.left == null || root.right == null) {
      root.left == nulll ? root.right : root.left;
    }else{
      root.data = findMin(root.right);
      root.right = deleteBST(root.right, root.data);
    }
  }
  root.left = deleteBST(root.left, value);
  root.right = deleteBST(root.right, value);

  return root;

}
function findMin(root) {
  if(root != null){
    return findMin(root.left);
  }
  return root.data;
}

let bt = CreateBinaryTree([15, 12, 18, 11, 13, 17, 22], 0);
console.log(insertBST(bt, 14));
InOrder(bt);
console.log(SearchBST(bt, 17));
console.log(SearchBST(bt, 19));
console.log(deleteBST(bt, 17));






