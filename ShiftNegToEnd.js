let arr = [22, 4, -8, -10, 5, 6, 72];

function movenevtolast(arr) {
  let l = 0;
  let r = arr.length - 1;
  console.log(l);
  console.log(r);

  for (let i = 0; i < arr.length/2; i++) {
    if (arr[l] > 0 && arr[r] > 0) {
      l++;
    } else if (arr[l] < 0 && arr[r] > 0) {
      let temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      l++;
      r--;
    } else if (arr[l] < 0 && arr[r] < 0) {
      r--;
    } else if (arr[l] > 0 && arr[l] < 0) {
      l++;
      r--;
    }
  }
  return arr;
}
console.log(movenevtolast(arr));