function subset(arr,a,b){
  let n = arr.length/2;
  let x = arr.slice(0,n);
  let y = arr.slice(n);
  
  let left = subsetSum(x);
  let right = subsetSum(y);
  
  left.sort((a,b) => a - b);
  let count = 0;
  for(let i = 0; i < right.length; i++){
    let min = a - right[i];
    let max = b - right[i];
    let low = binarySearchL(left,min);
    let high = binarySearchR(left,max);
    count+= high-low + 1;
  }
  return count;
}

function binarySearchL(arr, key){
	let l = 0, r = arr.length - 1;
  
  while(l <= r){
  	let mid = Math.floor((l+r)/2);
    if(arr[mid] >= key){
    	r = mid - 1;
    }
    else {
    	l = mid + 1;
    }
  }
  return l;
}

function binarySearchR(arr, key){
	let l = 0, r = arr.length - 1;
  
  while(l <= r){
  	let mid = Math.floor((l+r)/2);
    if(arr[mid] <= key){
    	l = mid + 1;
    }
    else {
    	r = mid - 1;
    }
  }
  return r;
}

function subsetSum(arr){
  let n = arr.length;
  let sLength = Math.pow(2,n);
  
  let result = [];
  
  for(let i = 0; i < sLength; i++){
    let sum = 0;
    for(let j = 0; j < n; j++){
      if((i & (1 << j)) > 0){
        sum+=arr[j]
      }
    }
    result.push(sum);
  }
  return result;
}

console.log(subset([1,2,-1,0],-1,1) == 10)
console.log(subset([1,-2,3],-1,2) == 5)