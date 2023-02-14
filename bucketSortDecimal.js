function bucket(arr, k){
    // let min = Math.min(arr);
    // let max = Math.max(arr);
    let n = arr.length;
    let result = [];
    // let range = max - min + 1;
    
    let b = new Array(k).fill(0);
    for(let i = 0; i < k; i++){
      b[i] = [];
    }
    
    for(let i = 0; i < n; i++){
      let key = (Math.floor(arr[i] * 10)) % k;
      b[key].push(arr[i]);
    }
    console.log(b)
    for(let i = 0; i < k; i++){
      for(let j = 0; j < b[i].length; j++){
        result.push(b[i][j]);
      }
      // result.push(...b[i].sort());
    }
    
    console.log(result);
  }
  
  console.log(bucket([0.29, 0.34, 0.19, 0.39, 0.21, 0.41],5))