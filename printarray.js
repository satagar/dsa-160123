let arr = [2, -2, 6, 8, 3, -4, 9, -8, -6, -5];
let x = arr.length;
arr.sort((a, b) => b - a);
let pos = [];
let neg = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    pos.push(arr[i]);
  } else {
    neg.push(arr[i]);
  }
}
console.log(pos);
console.log(neg);

let altArr = pos
  .map(function (s, i) {
    return [s, neg[i]];
  })
  .reduce(function (a, b) {
    return a.concat(b);
  });

console.table(altArr);
