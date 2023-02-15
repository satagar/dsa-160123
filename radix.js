function radix(arr){
    let max = Math.max(...arr);
    for(let i = 1; Math.floor(max/i) > 0; i *= 10){
      arr = rSort(arr,i);
    }
    return arr;
  }
  
  function rSort(arr, digit){
    let freq = new Array(10).fill(0);
    let n = arr.length;
    
    for(let i = 0; i < n; i++){
      let key = Math.floor(arr[i]/digit) % 10;
      freq[key]++;
    }
    
    for(let i = 1; i < 10; i++){
      freq[i] += freq[i-1];
    }
    
    let result = new Array(n).fill(0);
    for(let i = n - 1; i >= 0; i--){
      let key = Math.floor(arr[i]/digit) % 10;
      result[freq[key] - 1] = arr[i];
      freq[key]--;
    }
    
    return result;
  }
  
  radix([129, 431, 234, 653, 232, 824, 2, 921, 54])