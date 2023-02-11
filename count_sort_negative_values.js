function countSort(arr, len) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let range = max - min + 1;
    let frequency = new Array(range).fill(0);

    for (let i = 0; i < len; i++) {
        frequency[arr[i] - min]++;
    }
    for (let i = 1; i < frequency.length; i++) {
        frequency[i] = frequency[i] + frequency[i - 1];
    }
    let result = new Array(len).fill(0);
    console.log(frequency);
    for (let i = len-1; i >= 0; i--) {
        let index = frequency[arr[i]-min];
        result[index - 1] = arr[i];
        frequency[arr[i]-min]--;
    }

    console.log(result);
}

console.log(countSort([ -5, -10, 0, -3, 8, 5, -1, 10 ], 8));


