var count = 0;
function ktour(n){
  var out = new Array(n).fill(-1);
  for(let i = 0; i < n; i++){
    out[i] = new Array(n).fill(-1);
  }
  
  recurse(out, 0, 0, n);
  print(out);
}

function print(arr){
  for(let i = 0; i < arr.length; i++){
    let str = "";
    for(let j = 0; j < arr.length; j++){
      str += String(arr[i][j]) + ", ";
    }
    console.log(str.trim());
  }
}

function recurse(arr, i, j,n){
  if(i<0||i>=n||j<0||j>=n){
    return;
  }
  if(arr[i][j] !== -1){
    return;
  }
  
  arr[i][j] = count;
  count++;
  recurse(arr,i-2,j-1,n);
  recurse(arr,i-2,j+1,n);
  recurse(arr,i-1,j-2,n);
  recurse(arr,i-1,j+2,n);
  recurse(arr,i+1,j-2,n);
  recurse(arr,i+1,j+2,n);
  recurse(arr,i+2,j-1,n);
  recurse(arr,i+2,j+1,n);
}

ktour(8)