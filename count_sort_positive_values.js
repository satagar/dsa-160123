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
    for (let i = 0; i < len; i++) {
        let index = frequency[arr[i]-min];
        result[index - 1] = arr[i];
        frequency[arr[i]-min]--;
    }

    console.log(result);
}

console.log(countSort([1, 4, 2, 3, 1, 1], 6));
console.log(countSort([5, 4, 3, 2], 4));


