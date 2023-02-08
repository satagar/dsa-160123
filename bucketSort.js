const arr = [0.29, 0.34, 0.19, 0.39, 0.21, 0.41];
const k = 6;

function bucketSort(arr, k) {
  let bucketArr = new Array(k);
  for (let i = 0; i < k; i++) {
    bucketArr[i] = [];
  }

  for (let i = 0; i < arr.length; i++) {
    let key = Math.floor(arr[i] * 10);
    bucketArr[key].push(arr[i]);
  }

  console.log(`unsorted bucket ${bucketArr}`);

  for (let i = 0; i < k; i++) {
    bucketArr[i].sort();
  }
  console.log(`sorted bucket ${bucketArr}`);

  const result = [];
  for (let i = 0; i < k; i++) {
    let bucketlength = bucketArr[i].length;
    for (let j = 0; j < bucketlength; j++) {
      result.push(bucketArr[i][j]);
    }
  }
  return `sorted array: ${result}`;
}
console.log(bucketSort(arr, k));
