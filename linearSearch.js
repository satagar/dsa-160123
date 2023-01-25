function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      console.log(`found ${item} at the ${i}th position`);
    }
  }
  console.log(`item not found`);
}

let inputArray = [1, 2, 4, 5, 8, 4];
let item1 = 3;
let item2 = 4;
linearSearch(inputArray, item1);
//linearSearch(inputArray, item2);
