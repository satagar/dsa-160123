function pairOfTopics(arr1, arr2, len1, len2) {
    let arr3 = [];
    for (let i = 0; i < len1; i++) {

        arr3.push(arr1[i] - arr2[i]);
    }
    arr3.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < arr3.length; i++) {
        let val = arr3[i];
        let left = 0;
        let right = arr3.length - 1;
        let mid;
        if (val <= 0) {
            while (left <= right) {
                mid = parseInt((left + right) / 2);
                if (arr3[mid] + val > 0) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }

            }
            if(right != mid){
            count += (len1 - mid);
            }
        } else {
            count += len1 - (i + 1);
        }
    }
    return count;
}


let arr1 = [4, 8, 2, 6, 2];
let arr2 = [4, 5, 4, 1, 3]
console.log(pairOfTopics(arr1, arr2, arr1.length, arr2.length));
console.log(pairOfTopics([1, 3, 2, 4], [1, 3, 2, 4], 4, 4));
