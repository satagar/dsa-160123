function printLeaf(arr) {
    return helper(arr, 0, arr.length - 1);
}

function helper(arr, min, max) {
    if (min == max) {
        console.log(arr[min]);
        return;
    }

    const root = arr[min];
    let i = min + 1;
    while (arr[i] < root) {
        i++;
    }

    helper(arr, min + 1, i - 1);
    helper(arr, i, max);
}

printLeaf([890, 325, 290, 530, 965]);
