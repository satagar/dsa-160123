function sumArray(arr, n) {
    // Base case: if the array only has one element, return it
    if (n === 1) {
        return arr[0];
    } else {
        // Recursive case: return the last element plus the sum of the rest of the array
        return arr[n-1] + sumArray(arr, n-1);
    }
}

// Test the function
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = arr.length;
console.log(sumArray(arr, n));
