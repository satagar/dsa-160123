function linearSearch(arr, len, num) {
    let myarr = [];
    for (let i = 0; i < len; i++) {
        if (arr[i] === num) {
            myarr.push(i);
        }
    }
    return myarr;
}

(function () {
    let arr = [5, 3, 6, 9, 3, 34, 6, 65, 2, 67, 1];
    let res = linearSearch(arr, arr.length, 3);
    res.length === 0 ? console.log('Not Found') : console.log(`Found at index ${res}`);
})();

