function longestConsecutiveSubarray(arr,n) {
    arr.sort(function (a, b) { return a - b; });
    let count = 1;
    let max = 1;
    for (let i = 1; i < n; i++) {
        if (arr[i] === arr[i - 1] + 1) {
            count++;
            max = Math.max(max, count);
        } else {
            count = 1;
        }
    }
    return max;
   }
        let arr = [35, 3, 4, 88, 9, 10, 21, 5, 6, 7];
        let n = arr.length;
        console.log(
        "Length of the Longest consecutive sequence is "
        +longestConsecutiveSubarray(arr, n)
        );
        