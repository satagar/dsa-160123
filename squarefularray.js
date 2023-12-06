function isSquareful(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (!Number.isInteger(Math.sqrt(arr[i - 1] + arr[i]))) {
            return false;
        }
    }
    return true;
}

function squarefulPermutations(arr) {
    let count = 0;
    function permute(arr, l, r) {
        if (l === r) {
            if (isSquareful(arr)) {
                count++;
            }
        } else {
            for (let i = l; i <= r; i++) {
                [arr[l], arr[i]] = [arr[i], arr[l]];
                permute(arr, l + 1, r);
                [arr[l], arr[i]] = [arr[i], arr[l]];
            }
        }
    }
    permute(arr, 0, arr.length - 1);
    return count;
}
console.log(squarefulPermutations([1, 17, 8])); // Output: 2
