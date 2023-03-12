// A frog likes to jump from one wall to another. But the only condition is that the next wall should be higher than the
// previous one If itis not, then the frog will stop. The stamina needed by the frog to cover the walls is equavilalent to the
// xor of the wall height traversed by the frog. Now given the height of the buildings you need to find the maximum stamina
// needed, provided the frog starts from any building.
function frog(arr) {
    let stack = [];
    stack.push(arr[arr.length - 1]);
    for (let i = arr.length - 2; i >= 0; i--) {
        if (stack[stack.length - 1] < arr[i]) {
            stack.pop();
        }
        if (stack.length) {
            arr[i] = stack[stack.length - 1] ^ arr[i];
        }
        stack.push(arr[i]);
    }
    console.log(stack);
    return(Math.max(...stack));
}



console.log(frog([1, 2, 4, 9, 5]))