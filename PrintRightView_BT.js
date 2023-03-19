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

//Solved using Recursion
// let max_level = 0;
// function rightView_BST(root, level) {
//   if (root == null) {
//     return;
//   }
//   if (max_level < level) {
//     console.log(root.data);
//     max_level = level;
//   }
//   rightView_BST(root.right, level + 1);
//   rightView_BST(root.left, level + 1);
// }

//Solved Using queue
function rightView_BST(root) {
  let queue = [root, '$'];
  let prev = null;

  while (queue.length) {
    let node = queue.shift();
    if (node == '$' && queue.length > 0) {
      queue.push('$');
    } else {
      if (node.left != null) {
        queue.push(node.left);
      }
      if (node.right != null) {
        queue.push(node.right);
      }
    }
    if(node == '$'){
      console.log(prev.data);
    }
    prev = node;
  }


}
let bt = CreateBinaryTree([1, 2, 3, null, 6, 4, 5, null, null, null, 7], 0);
console.log(bt);
rightView_BST(bt, 1);





