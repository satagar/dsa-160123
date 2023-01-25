function binarySearch(arr, key) {
  let first = 0;
  let last = arr.length - 1;

  while (first < last) {
    let mid = Math.ceil((first + last) / 2);

    if (key === mid) {
      return mid;
    } else if (arr[mid] < key) {
      start = mid++;
    } else if (arr[mid] > key) {
      start = mid--;
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 4, 7, 8, 21, 28, 76, 86], 8));
