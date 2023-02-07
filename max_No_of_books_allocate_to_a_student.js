function bookAllocation(arr, k) {
    let min = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = max + arr[i];
    }
    let output = -1;
    while (min <= max) {
        let mid = parseInt((max + min) / 2);
        let count = 0;
        let prev = 0;
        let maxval = 0;
        for (let i = 0; i < arr.length; i++) {
            let diff =  arr[i] + prev ;
            if (diff >= mid) {
                prev = arr[i];
                count++;
                maxval = Math.max(maxval,prev);
            }else{
                prev = diff;
            }
        }
        if (count >= k) {
            min = mid + 1;
            output = Math.max(mid,maxval);
        } else {
            max = mid - 1;
        }

    }

    return output;
}

console.log(bookAllocation([12, 34, 67, 90], 2));
console.log(bookAllocation([15, 10, 19, 10, 5, 18, 7], 5));
console.log(bookAllocation([13,31,37,45, 46,54,55, 63, 73, 84, 85],9));
console.log(bookAllocation([1,2,3,4],3));
console.log(bookAllocation([1, 3, 2, 4, 10, 8, 4, 2, 5, 3],4));