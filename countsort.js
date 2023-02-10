function count(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let range = max - min + 1;
  let count = new Array(range).fill(0);
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  for (let i = 1; i < count.length; i++) {
    count[i] = count[i] + count[i - 1];
  }

  let sortedarray = new Array(arr.length).fill(0);

  for (let i = 0; i < sortedarray.length; i++) {
    let targetindex = count[arr[i] - 1] - 1;
    sortedarray[targetindex] = arr[i];
    count[arr[i] - 1]--;
  }

  return sortedarray;
}

console.log(count([1, 4, 2, 3, 1, 1]));
console.log(count([1, 5, 3, 2, 5, 4]));
