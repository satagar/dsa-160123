function binarySearch(arr, len, num) {
    let start = 0, end = len - 1;
    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] === num) {
            return mid;
        } else if (arr[mid] < num) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

(function () {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let res = binarySearch(arr, arr.length, 1);
    res === -1 ? console.log('Not Found') : console.log(`Found at index ${res}`);
})();

//Happy coding!!