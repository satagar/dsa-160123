let arr = [-22, 4, -8, -10, 5, -6, -72];

function movenevtolast(arr) {
  let l = 0;
  let r = arr.length - 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[l] > 0) l++;
    else {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      r--;
    }
  }
  return arr;
}
console.log(movenevtolast(arr));
