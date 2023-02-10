function countSortWithNegative(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let range = max - min + 1;
  let count = new Array(range).fill(0);

  for (let i = 0; i < arr.length; i++) {
    key = arr[i] - min;
    count[key]++;
  }

  for (let i = 1; i < count.length; i++) {
    count[i] = count[i] + count[i - 1];
  }

  let sortedarray = new Array(arr.length).fill(0);
  for (let i = arr.length - 1; i >= 0; i--) {
    let key = count[arr[i] - min];
    sortedarray[key - 1] = arr[i];
    count[arr[i] - min]--;
  }
  return sortedarray;
}
console.log(countSortWithNegative([-15, 10, 0, -13, 18, 5, -11, 10]));

// console.log(countSortWithNegative([1, -4, 2, -3, -1, 1]));
// console.log(countSortWithNegative([1, 5, -3, -2, 5, 4]));
