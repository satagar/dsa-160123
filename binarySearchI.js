function binarySearch(arr, key){
	let left = 0, right = arr.length - 1;
  
  while(left <= right){
  	let mid = Math.floor((left + right)/2);
    
    if(arr[mid] == key){
    	return mid;
    }
    else if(arr[mid] > key){
    	right = mid - 1;
    }
    else {
    	left = mid + 1;
    }
  }
  
  return -1;
}

console.log(binarySearch([1,2,3], 3));