const countSort = (Array) => {
let n=Array.length;
let  max = Math.max(...givenArray)
let  min = Math.min(...givenArray)
let count = new Array((max-min)+1).fill(0);
    for (let i = 0; i < n; i++){
    count[Array[i] - min]++;
    }
    for (let i = 1; i < range; i++){
    count[i]=count[i] + count[i-1];
    }
  output = new Array(n).fill(0);
  for (let i =n-1; i >= 0; i--) {
 
  output[count[Array[i] - min] - 1] =
  Array[i];
  count[Array[i] - min]--;

  
 for (let i = 0; i <n; i++){
  Array[i] = output[i];
 }

}

}