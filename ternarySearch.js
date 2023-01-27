function binarySearch(arr, len, num) {
    let start = 0, end = len - 1;
    while (start <= end) {
        let mid1 = parseInt((end - start) / 3) + start;
        let mid2 = end - parseInt((end - start) / 3);
        if (arr[mid1] == num) {
            return [mid1];
        } else if (arr[mid2] == num) {
            return [mid2];
        } else if (arr[mid1] < num && arr[mid2] > mid2) {
            start = mid1 + 1;
            end = mid2 - 1;
        }
        else if (arr[mid2] < num) {
            start = mid2 + 1;
        } else {
            end = mid1 - 1;
        }
    }
    return -1;
}

(function () {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let res = binarySearch(arr, arr.length, 6);
    res === -1 ? console.log('Not Found') : console.log(`Found at index ${res}`);
})();

