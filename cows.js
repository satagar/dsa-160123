function segment(arr,k){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
      if(arr[i] > max){
        max = arr[i];
      }
    }
  
    // Search for key between max and sum
    let l = 1, r = max;
    let ans;
    while(l <= r){
      let mid = Math.floor((r+l)/2);
      let count = 1;
      let cow = arr[0];
      for(let i = 1; i < arr.length; i++){
        let diff = arr[i] - cow;
        if(diff >= mid){
          count++;
          cow = arr[i];
        }
      }
      if(count >= k){
        ans = mid;
        l = mid + 1;
      }
      else {
        r = mid - 1
      }
    }
    return ans;
  }

  segment([1,2,4,8,9],3)