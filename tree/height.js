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
  
  function searchTree(root, value){
      if(root == null){
        return false;
    }
    
    if(root.data == value){
        return true;
    }
    
    return searchTree(root.left, value) ||
    searchTree(root.right, value);
  }
  
  function height(root){
      if(root == null) return -1;
    
    return Math.max(height(root.left), height(root.right)) + 1;
  }
  
  let root = createTree([10, 20, 30, 40, 50, 60, 70, 80, 90, null, null, 100], 0);
  
  console.log(searchTree(root, 100));
  console.log(height(root));