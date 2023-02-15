const countingSort = function(arr) {
    let i, j, max = -1; 
    let values;

    for (i = 0; i < arr.length; i++) {
      if (Math.abs(arr[i]) > max) {
        max = Math.abs(arr[i]);
      }
    }
   
    values = Array(max * 2 + 1).fill(0);
          
    for (i = 0; i < arr.length; i++) {
      values[arr[i] + max]++;
    }
  
    i = 0; j = 0;
    while (i < arr.length) {
      if (values[j] > 0) {
        values[j]--;
        arr[i] = j - max;
        i++;
      } else {
        j++;
      }
    }
  
    return arr;
  };

  console.log(countingSort([-15, -10,0,-13,18,5,-11,10]))
