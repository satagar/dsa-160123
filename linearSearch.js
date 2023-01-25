function linearSearch(arr,k){
    for(let i=0;i<arr.length;i++){
          if(arr[i]===k)return i
    }
}

console.log(linearSearch([1,2,4,5,6,7],6))