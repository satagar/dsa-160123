let arr = [1, 2, 3, 4, 6, 7, 8, 12, 16, 18, 20, 20, 20, 24, 32];

function BinarySearch(arr, target) {
  let result = [];
  let low = 0;
  let hi = arr.length - 1;
  while (low <= hi) {
    let mid = Math.floor((low + hi) / 2);
    if (arr[mid] === target) {
      result.push(mid);
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return result;
}
// console.log(BinarySearch(arr, 20));
