function count(arr){
    const n = arr.length;
    let max = arr[0], min = arr[0];
    for(let i = 1; i < n; i++){
      if(arr[i] > max){
        max = arr[i];
      }
      if(arr[i] < min){
        min = arr[i];
      }
    }
    
    const range = max - min + 1;
    const freq = new Array(range).fill(0);
    
    for(let i = 0; i < n; i++){
      const key = arr[i] - min;
      freq[key]++;
    }
    
    for(let i = 1; i <= range; i++){
      freq[i] += freq[i-1];
    }
    
    const result = new Array(n).fill(0);
    
    for(let i = n-1; i >= 0; i--){
      const key = arr[i] - min;
      result[freq[key]-1] = arr[i];
      freq[key]--;
    }
    
    return result;
  }
  
  count([5,5,3,2,1])