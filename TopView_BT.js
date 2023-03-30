class TreeNode{
  constructor(data){
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

function CreateBinaryTree(arr,i){
  if(arr.length <= i || arr[i] == null){
      return;
  }
  let node = new TreeNode(arr[i]);
  node.left = CreateBinaryTree(arr,(2*i) + 1);
  node.right = CreateBinaryTree(arr,(2*i) + 2);
  return node;
}

function topView(root){
  let map = new Map();
  let q = [];
  q.push([root,0]);
  while(q.length){
    let temp = q.shift();
    if(!map.has(temp[1])){
      map.set(temp[1],temp[0].data);
    }
    if(temp[0].left){
      q.push([temp[0].left,temp[1]+1]);
    }
    if(temp[0].right){
      q.push([temp[0].right,temp[1]-1]);
    }
  }
  for(let [key,value] of map){
    console.log(value);
  }
}


let Btree1 = CreateBinaryTree([1,2,3,null,4,null,null,null,null,null,5,null,null,null,null,null,null,null,null,null,null,null,6],0);
let Btree2 = CreateBinaryTree([1,2,3,4,5,6,7,8,9,10,11],0);
topView(Btree1);
console.log(`--------------------------------`)
topView(Btree2);







