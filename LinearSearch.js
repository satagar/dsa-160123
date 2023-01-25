function LinearSearch(arr,n,key) {
    for(let i=0;i<n;i++){
    if(arr[i]==key){
    return i;
    }
    }
    return -1;
   }
   let arr = [2,1,4,6,3,8,5]
   let n = arr.length
   
   console.log(LinearSearch(arr,n,8))