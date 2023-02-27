function segment(arr,k){
    let max = arr[0], sum = arr[0];
    for(let i = 1; i < arr.length; i++){
      if(arr[i] > max){
        max = arr[i];
      }
      sum += arr[i];
    }
  
    // Search for key between max and sum
    let l = max, r = sum;
    let ans;
    while(l <= r){
      let mid = Math.floor((r+l)/2);
      let count = 1;
      let total = 0;
      for(let i = 0; i < arr.length; i++){
        total += arr[i];
        if(total > mid){
          count++;
          total = arr[i];
        }
      }
      if(count <= k){
        ans = mid;
        r = mid - 1;
      }
      else {
        l = mid + 1;
      }
    }
    return ans;
  }

  segment([12,34,67,90],2)
  segment([10,20,30,40],2)