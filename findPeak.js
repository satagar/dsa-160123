function findPeak(arr){
    let n = arr.length;
    let l = 0, r = n - 1;
    while(l <= r){
      let mid = Math.floor((l+r)/2);
      
      if((mid < 1 || arr[mid] > arr[mid-1]) && (mid == n-1 || arr[mid] > arr[mid+1])){
        return mid;
      }
      else if(arr[mid] < arr[mid+1]){
        l= mid + 1;
      }
      else {
        r = mid - 1;
      }
    }
    return 0;
  }
  
  var arr = [4, 8, 7, 21, 22, 23, 24];
  var n = arr.length;
  console.log("peak point is "+ findPeak(arr, n));
  var arr = [1, 3, 20, 4, 1, 0];
  var n = arr.length;
  console.log("peak point is "+ findPeak(arr, n));