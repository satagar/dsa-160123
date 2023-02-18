function radixSort(arr) {
    let max = Math.max(...arr);
    for (let i = 1; parseInt(max / i) > 0; i = i * 10) {
        arr = countSort(arr, i);
    }
    return arr;
}
function countSort(arr, digit) {
    let freq = new Array(10).fill(0);
    let n = arr.length
    for (let i = 0; i < n; i++) {
        let key = parseInt(arr[i] / digit) % 10;
        freq[key]++;
    }
    for (let i = 1; i < 10; i++) {
        freq[i] = freq[i] + freq[i - 1];
    }
    let result = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        let key = parseInt(arr[i] / digit) % 10;
        result[freq[key] - 1] = arr[i];
        freq[key]--;
    }
    return result;
}

let arr1 = [653, 824, 921, 2, 54, 431, 129, 232, 234];
console.log(radixSort(arr1));