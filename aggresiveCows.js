function findMinimumDistance(arr, len, cows) {
    arr.sort((a,b)=>{
        return a - b;
    });
    let min = 1;
    let max = min;
    for (let i = 1; i < len; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    let output = 1;
    while (min <= max) {
        let mid = parseInt((min + max) / 2);
        let prev = arr[0];
        let count = 1;
        for (let i = 0; i < len; i++) {
            if (arr[i] - prev >= mid) {
                prev = arr[i];
                count++;
            }
        }
        if (count >= cows) {
            min = mid + 1;
            output = mid;
        } else {
            max = mid - 1;
        }
    }
    return output;
}


console.log(findMinimumDistance([1, 2, 4, 8, 9], 5, 3));
console.log(findMinimumDistance([79, 74, 57, 22], 4, 4));
