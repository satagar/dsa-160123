function LinearSearch(arr,n,key) {
    let Result =[];
    for(let i=0;i<n;i++){
    if(arr[i]==key){
    Result.push(i);
    }
    }
    return Result
   }
   let arr = [2,1,4,6,3,8,5,8,3,2,4,6]
   let n = arr.length
   
   console.log(LinearSearch(arr,n,2))