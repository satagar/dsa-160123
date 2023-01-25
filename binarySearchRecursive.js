function binarySearch_Recursion(arr, start,end, num) {
       if(start <= end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] === num) {
            return mid;
        } else if (arr[mid] < num) {
            return binarySearch_Recursion(arr, mid + 1,end, num)
        } else {
            return binarySearch_Recursion(arr, start,mid - 1, num)
        }
    }
    return -1;
}

(function () {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let res = binarySearch_Recursion(arr,0,arr.length-1, 4);
    res === -1 ? console.log('Not Found') : console.log(`Found at index ${res}`);
})();

//Happy coding!!