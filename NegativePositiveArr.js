let arr = [10,1,-5,7,-8,-10]

let temp;
let start = 0;
let end = arr.length-1

while(start < end){

 if(arr[start]>0){
  start++
 }else{
  temp =  arr[end]
  arr[end] = arr[start]
  arr[start] = temp
  end--
 }
}

console.log(arr)