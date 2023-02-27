function pairOfTopics(a,b){
  const n = a.length;
  let count = 0;
  for(let i = 0; i < n-1; i++){
    for(let j = i + 1; j < n; j++){
      if(a[i] + a[j] > b[i] + b[j]){
        count++;
      }
    }
  }
  
  return count;
}

console.log(pairOfTopics([4,8,2,6,2],[4,5,4,1,3]));
console.log(pairOfTopics([1,3,2,4],[1,3,2,4]));