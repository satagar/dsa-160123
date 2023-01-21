function sum(arr, n) {
    if (n <= 0) {
        return 0;
    }
    return arr[n-1] + sum(arr, n-1);
}

let arr = [10, 7, 8, 9, 7, 4, 5, 8, 6, 45];
let n = arr.length;
console.log(sum(arr, n));
