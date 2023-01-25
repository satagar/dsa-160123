function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
function shiftNegToEnd(arr) {
    let i = 0, j = arr.length - 1
    while (i <= j) {
        if (arr[i] < 0 && arr[j] < 0) {
            j--
        } else if (arr[i] >= 0 && arr[j] >= 0) {
            i++
        } else if (arr[i] >= 0 && arr[j] < 0) {
            j--
        } else if (arr[i] < 0 && arr[j] >= 0) {
            swap(arr, i, j)
            j--
        }
    }
    return arr
}
let arr = [-5, 3, -4, 88, -9, -10, 21, 5, 6]
console.log(shiftNegToEnd(arr))