function bucketSort(arr, key) {
    let bucket = new Array(key);
    let n = arr.length;
    let result = [];

    for (let i = 0; i < key; i++) {
        bucket[i] = [];
    }
    for (let i = 0; i < n; i++) {
        let newArr = Math.floor(arr[i] * 10);
        bucket[newArr].push(arr[i]);
    }
    for (let i = 0; i < key; i++) {
        bucket[i].sort();
    }
    for (let i = 0; i < key; i++) {
        let bucketLength = bucket[i].length;
        for (let j = 0; j < bucketLength; j++) {
            result.push(bucket[i][j]);
        }
    }
    return result;
}

console.log(bucketSort([0.29, 0.34, 0.19, 0.39, 0.21, 0.41], 5));