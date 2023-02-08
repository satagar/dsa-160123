function binarySearch(arr,key,n){
    let start =0
    let end = n-1;
    let mid = parseInt(start+end/2);
    while(start <= end){
     if(arr[mid]==key){
     return mid;
     }
     if(key>arr[mid]){
      start=mid+1 
     }else{
     end = mid-1
     }
     mid = parseInt(start+end/2)
    }
    return -1;
    }
    
    let arr = [2,3,5,7,9,10,14]
    let n = arr.length;
    
    console.log(binarySearch(arr,7,n));