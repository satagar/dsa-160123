function bucketSort(arr) {

    let n = arr.length;
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let k = Math.floor(max/10) - Math.floor(min/10) + 1;
    let result = [];

    let b = new Array(k);
    for (let i = 0; i < k; i++) {
        b[i] = [];
    }
    for (let i = 0; i < n; i++) {
        let key = parseInt((arr[i]-min) / 10);
        console.log(key);
        b[key].push(arr[i]);
    }
   
    for (let i = 0; i < k; i++) {
        b[i].sort();
    }
    for (let i = 0; i < k; i++) {
        result.push(...b[i]);
    }
    console.log(result);

}



let arr = [29, 34,-7,-99, 19, 39,-10, 21, 41];
console.log(bucketSort(arr));