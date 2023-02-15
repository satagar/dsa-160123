function findSextuplets(arr, n) {
    var RHS = new Array(n * n * n);
    var index = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] != 0) {
        for (let j = 0; j < n; j++) {
          for (let k = 0; k < n; k++) {
            RHS[index++] = arr[i] * (arr[j] + arr[k]);
          }
        }
      }
    }
  
    RHS.sort((a, b) => a - b);
  
    var count = 0;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
          var key = arr[i] * arr[j] + arr[k];
          var leftIndex = binaryLeft(RHS, key);
          var rightIndex = binaryRight(RHS, key);
          count += rightIndex - leftIndex + 1;
        }
      }
    }
  
    return count;
  }
  
  function binaryLeft(arr, key) {
    let l = 0,
      r = arr.length - 1;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (arr[mid] >= key) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return l;
  }
  
  function binaryRight(arr, key) {
    let l = 0,
      r = arr.length - 1;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (arr[mid] <= key) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return r;
  }
  
  var arr = [2, 3];
  var n = arr.length;
  console.log(findSextuplets(arr, n) == 4);