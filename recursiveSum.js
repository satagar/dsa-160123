let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findSum(arr, i, sum) {
    if (i === arr.length) {
        return sum;
    }
    sum = sum + arr[i];
    let value = findSum(arr, i + 1, sum);
    return value;
}
console.log(findSum(arr, 0, 0));