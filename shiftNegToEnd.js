function shiftNegatives(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[left] < 0) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        right--;
      } else {
        left++;
      }
    }
    return arr;
  }
  let Array = [-5,3,-4,88,-9,-10,21,5,6];
  console.log(shiftNegatives(Array));

  //shiftneg