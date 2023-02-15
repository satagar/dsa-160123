function binarySearch(arr, key) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        let mid = parseInt((left + right) / 2);

        if (arr[mid] === key) {
            return mid;
        }

        if (arr[mid] < key) {
            left = mid + 1
        } else {
            right = mid - 1;
        }

    }

    return -1; //if not found
}

let arr=[2,4,6,7,8]
console.log(binarySearch(arr,7))
