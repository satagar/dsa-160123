let arr = [1, -7, 9, 3, -5, 9]
let k = 9

function linearSearch(arr, k) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == k) {
      result.push(i)
    }
  }
  return result
}
console.log(linearSearch(arr, k))
