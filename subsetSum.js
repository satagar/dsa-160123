function subsetSum(arr, sum) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] + arr[mid + 1] == sum) {
            return [arr[mid], arr[mid + 1]]
        } else if (arr[mid] + arr[mid - 1] == sum) {
            return [arr[mid], arr[mid - 1]]
        }
        if (arr[mid] + arr[mid - 1] > sum || arr[mid] + arr[mid + 1] > sum) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return [-1, -1]
}
let arr = [1, 3, 4, 5, 6, 8], sum = 11;
console.log(subsetSum(arr, sum))