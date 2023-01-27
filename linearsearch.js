function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return arr[i];
    }
  }
  return -1;
}

const Array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const search = 23;

console.log(linearSearch(Array, search)); 
