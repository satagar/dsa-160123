function BucketSort(arr, k) {
  let n = arr.length;
  let result = [];
  let b = new Array(k);

  for (let i = 0; i < k; i++) {
    b[i] = [];
  }
  for (let i = 0; i < n; i++) {
    let key = Math.floor(arr[i] / 10);
    b[key].push(arr[i]);
  }
  for (let i = 0; i < k; i++) {
    b[i].sort();
  }
  for (let i = 0; i < k; i++) {
    let blength = b[i].length;
    for (let j = 0; j < blength; j++) {
      result.push(b[i][j]);
    }
  }
  return result;
}

console.log(BucketSort([29, 34, 19, 39, 21, 41], 5));

console.log(BucketSort([0.29, 0.34, 0.19, 0.39, 0.21, 0.41], 5));

