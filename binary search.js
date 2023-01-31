function binarySearch(arr, key) {
    let left = 0, right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] == key) {
            return mid
        } else if (arr[mid] > key) {
            right = mid--
        } else {
            left = mid++
        }
    }
    return -1
}

console.log(binarySearch([2, 3, 5, 7, 9, 12, 18], 5))
