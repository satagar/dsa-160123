function bucketSort(arr, k) {
    let n = arr.length;
    let result = [];

    let b = new Array(k);
    for (let i = 0; i < k; i++) {
        b[i] = [];
    }

    for (let i = 0; i < n; i++) {
        let value = Math.floor(arr[i] * 10);
        b[value].push(arr[i]);
    }

    for (let i = 0; i < k; i++) {
        b[i].sort();
    }
    for (let i = 0; i < k; i++) {
        result.push(...b[i]);
    }
    console.log(result);

}



let arr = [0.29, 0.34, 0.19, 0.39, 0.21, 0.41];
console.log(bucketSort(arr, 5));