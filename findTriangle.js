// Time complexity :-O(n*n*logn)
function countGreater(arr, n, k) {
    let r = n - 1;
    let l = 0;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] > k) {
            r = mid - 1;
        } else if (arr[mid] < k) {
            l = mid + 1;
        }
    }
    return n - l > 0 ? n - l : -1;
}

function findTraingle(arr, n) {
    arr.sort((a, b) => {
        return a - b;
    });

    let ans = [];
    let max = arr[n - 1];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            ans.push(arr[i] + arr[j]);
        }
    }

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (max > ans[i]) {
            let res = countGreater(arr, n, ans[i]);
            if (res) {
                count = count + res;
            }
        }
    }
    return count;

}
console.log(findTraingle([5, 2, 9, 6], 4));
console.log(findTraingle([2, 4, 10], 3));
console.log(findTraingle([1, 2, 3], 3));