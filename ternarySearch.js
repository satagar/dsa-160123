function ternarySearch(arr, len, num) {
    let start = 0, end = len - 1;
    while (start <= end) {
        let mid1 = start + parseInt((end - start) / 3);
        let mid2 = end - parseInt((end - start) / 3);
        if (arr[mid1] == num) {
            return mid1;
        }else if (arr[mid2] == num) {
            return mid2;
        }else if (arr[mid1] < num && arr[mid2] < num) {
            start = mid1 + 1;
        }
        else if (arr[mid1] > num && arr[mid2] > num) {
            end = mid2 - 1;
        }else {
            start = mid1 + 1;
            end = mid2 - 1;
        }
    }
    return -1;
}

(function () {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < 12; i++) {
        let res1 = ternarySearch(arr, arr.length, i);
        res1 === -1 ? console.log('Not Found') : console.log(`Found at index ${res1}`);
    }
})();

