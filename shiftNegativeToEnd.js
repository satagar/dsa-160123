function sort(array) {

    let left = 0
    let right = array.length - 1

    while (left < right) {

        if (array[left] >= 0) {
            left++;
        } else {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp
            right--;
        }
    }
    return array;
}
console.log(sort([-5, 3, -4, 88, -9, -10, 21, 5, 6]))