//Given the root of BST,convert to greater Tree
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

let sum =0;
function greaterTree(root){
    if(root == null) return;

    greaterTree(root.right);
    sum += root.data;
    root.data = sum;
    greaterTree(root.left);

}
function InOrder(node) {
    if (node == null) return;
  
    InOrder(node.left);
    console.log(node.data);
    InOrder(node.right);
  
  }
let bt = CreateBinaryTree([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8], 0);
InOrder(bt);
greaterTree(bt);
console.log('After Greater Tree application')
InOrder(bt);
  
  
  
  
  
  
  