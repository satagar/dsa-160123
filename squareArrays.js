function print(arr){
  perm([],arr);
}
var count = 0;
function perm(start, rem){
  if(rem.length == 0){
    console.log(start)
    if(isSquareArray(start)){
      count++;
    }
  }
  
  for(let i = 0; i < rem.length; i++){
    const startCopy = start.slice();
    const remCopy = rem.slice();
    startCopy.push(rem[i])
    remCopy.splice(i,1)
    perm(startCopy,remCopy);
  }
}

function isSquareArray(arr){
  for(let i = 0; i < arr.length-1; i++){
    if(!Number.isInteger(Math.sqrt(arr[i] + arr[i+1])))
      return false;
  }
  return true;
}

print([2,2,2])
console.log(count);