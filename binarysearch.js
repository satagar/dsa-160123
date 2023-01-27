function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let middle = 0;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (arr[middle] === target) {
            return middle;
        } else if (arr[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 7;
let result = binarySearch(arr, target);
console.log(result); // output: 6
