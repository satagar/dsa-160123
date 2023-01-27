let inputarray = [2, 3, 5, 7, 8, 9, 10, 13, 14];

function ternary(arr, item) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    let mid1 = parseInt(left + (right - left) / 3);
    let mid2 = parseInt(right - (right - left) / 3);
    if (item === arr[mid1]) {
      return mid1;
    } else if (item === arr[mid2]) {
      return mid2;
    } else if (arr[mid1] > item) {
      right = mid1 - 1;
    } else if (arr[mid1] < item && arr[mid2] > item) {
      right = mid2;
      left = mid1;
    } else if (arr[mid2] < item) {
      left = mid2 + 1;
    }
  }
  return "not found";
}

console.log(ternary(inputarray, 14));
