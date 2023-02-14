function notTriangle(arr) {
  arr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const key = arr[i] + arr[j];
      let result = binarySearchL(arr, key);
      if (result !== -1) {
        count += arr.length - result;
      }
    }
  }
  return count;
}

function binarySearchL(arr, key) {
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] > key) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l < arr.length ? l : -1;
}
binarySearchL([1, 2, 2, 3, 3, 4, 5], 2);
notTriangle([4,2,10])
console.log(notTriangle([4,2,10]) == 1)
console.log(notTriangle([1,2,3]) == 0)
console.log(notTriangle([5,2,9,6]) == 2)