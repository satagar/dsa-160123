//From the given preorder of BST print the leaf node of BST
function findLeafNode(arr){
    let ans = [];
    let stack = [arr[0]];

    for(let i=1;i<arr.length;i++){
        if(arr[i] < stack[stack.length-1]){
            stack.push(arr[i]);
        }else{
            let temp = stack[stack.length-1];
            let removed = 0;
            while(stack.length != 0 && stack[stack.length-1] < arr[i]){
                stack.pop();
                removed++;
            }
             stack.push(arr[i]);
             if(removed >= 2) ans.push(temp);
        }
    }
    ans.push(stack[stack.length-1]);
    return ans;
}
  
console.log(findLeafNode([890,325,290,530,965]));
  
  
  
  
  
  