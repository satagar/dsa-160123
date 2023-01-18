function shiftNegatives(arr) {
    const nonNegatives = arr.filter(x => x >= 0);
    const negatives = arr.filter(x => x < 0);
    return nonNegatives.concat(negatives);
}
console.log(shiftNegatives([-5, 3, -4, 88, -9, -10, 21, 5, 6]));