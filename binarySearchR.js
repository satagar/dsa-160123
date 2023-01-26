function binarySearch(arr, key, left, right) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] == key) {
    return mid;
  } else if (arr[mid] > key) {
    return binarySearch(arr, key, left, mid - 1);
  } else {
    return binarySearch(arr, key, mid + 1, right);
  }
}

console.log(binarySearch([1,2,4], 4, 0, 2));
