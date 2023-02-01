let arr = [1, 2, 2, 4, 5, 6, 8]
let key = 2
function searchDuplicate(arr, key) {
    let i = 0, j = arr.length - 1
    while (i <= j) {
        let mid = Math.floor((i + j) / 2)
        if (key == arr[mid]) {
            if (arr[mid] == arr[mid + 1]) return true
            if (arr[mid] == arr[mid - 1]) return true
            return false
        } else if (key < arr[mid]) {
            j = mid - 1
        } else {
            i = mid + 1
        }
    }
    false
}
console.log(binarySearch(arr, key))
