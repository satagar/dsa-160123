/*Given an array. You need to ﬁnd the length of the longest consecutive sequence such that elements are 
consecutive integers. For example –
Input – {35, 3, 4, 88, 9, 10, 21, 5, 6} 
Output – 4
Sequence is 3,4,5,6*/

function longestConsecutiveSeq(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let length = 1; //even a single integer can be a sequence in itself
  let answer = 1; //initiating the longest concequtive sequence from 1

  //initiating the iteration from i=1 to check whether it is 1 more than it's previous index
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === 1) {
      length++; //if the difference is 1, increment the length
    } else {
      length = 1; // reset the length if the sequence gets non-consecutive
    }
    answer = Math.max(length, answer);
  }
  return answer;
}

const inputArray = [35, 3, 4, 88, 9, 10, 21, 5, 6];
const inputArray2 = [35, 3, 4, 88, 9, 10, 21, 5, 6, 89, 90, 92, 93, 91];
console.log(longestConsecutiveSeq(inputArray2));
