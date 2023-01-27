function linearSearch(arr, x) {
    let indexes = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) {
        indexes.push(i);
      }
    }
    return indexes;
  }
  const Array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 23];
  const search = 23;
  console.log(linearSearch(Array, search)); 
  