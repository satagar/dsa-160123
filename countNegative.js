function countSort(arr) {
    let n = arr.length;
    
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    let range = max - min + 1;
    
    let freq = new Array(range).fill(0);
    
    for(let i = 0; i < n; i++){
      let key = arr[i] - min;
      freq[key]++;
    }
    
    for(let i = 1; i < range; i++){
      freq[i] += freq[i-1];
    }
    
    let result = new Array(n).fill(0);
    
    for(let i = n-1; i >= 0; i--){
      let key = arr[i] - min;
      result[freq[key] - 1] = arr[i];
      freq[key]--;
    }
    
    return result;
  }
  
  countSort([-15, -10, 0, -13, 18, 5, -11, 10]);