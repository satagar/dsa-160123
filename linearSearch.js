function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      console.log(`found ${item} at the ${i}th position`);
    }
  }
}

let inputArray = [1, 2, 4, 5, 8, 4, 7, 2];
let item1 = 2;
//let item2 = 8;
linearSearch(inputArray, item1);
//linearSearch(inputArray, item2);
