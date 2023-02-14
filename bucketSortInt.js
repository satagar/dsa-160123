function bucket(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let n = arr.length;
    let result = [];
    let base = 10;
    let range = Math.floor(max/base) - Math.floor(min/base) + 1;
    let b = new Array(range).fill(0);
    for(let i = 0; i < range; i++){
      b[i] = [];
    }
    
    for(let i = 0; i < n; i++){
      let key = Math.floor((arr[i]-min)/base);
      b[key].push(arr[i]);
    }
    for(let i = 0; i < range; i++){
      for(let j = 0; j < b[i].length; j++){
        result.push(b[i][j]);
      }
      // result.push(...b[i].sort());
    }
    
    console.log(result);
  }
  
  console.log(bucket([29, 34, 19, 39, 21, 41]))