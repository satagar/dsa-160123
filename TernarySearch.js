const TearnarySearch =( arr, value, left, right)=>{
  if(left > right){
    return -1;
  }

let mid1 = left + Math.floor((right-left)/3);
let mid2 = right - Math.floor((right-left)/3);

if(arr[mid1] == value){
    return mid1;
}
else if (arr[mid2] == value){
    return mid2;
}
else if (arr[mid1] < value && arr[mid2] < value){
    return TearnarySearch ( arr, value, mid2+1, right)
}
else if (arr[mid2] > value && arr[mid1] > value){
    return TearnarySearch ( arr, value, left, mid1-1)
}
else{
  return TearnarySearch(arr, value, mid1+1, mid2-1)
}
}

const arr = [7,9,17,51,55,61,71,72,79,81,88,91,95,99];
const value = 72;
console.log(TearnarySearch(arr, value, 0, arr.length-1))