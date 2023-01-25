let arr = [1, -7, 9, 3, -5, 9]
let k = -7

function linearSearch(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == k) {
      return i
    }
  }
  return -1
}
console.log(linearSearch(arr, k))
