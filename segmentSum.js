function segment(arr,k){
  let max = arr[0], sum = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
    sum+=arr[i];
  }

  // Search for key between max and sum
  let l = max, r = sum;
  let ans;

  while(l <= r){
    let mid = Math.floor((l+r)/2);
    let count = 1;
      sum = 0;
    for(let i = 0; i < arr.length; i++){
      sum+=arr[i];
      
      if(sum > mid){
        count++;
        sum = arr[i];
      }
    }
    if(count <= k){
      ans = mid;
      r = mid - 1;
    }
    else {
      l = mid + 1
    }
  }
  return ans;
}

segment([1,2,3,4],3)
segment([1,3,2,4,10,8,4,2,5,3],4)