function find(arr, i, j) {

    if (i === 3 && j === 3) {
        arr[i][j] = 2;
        console.log(arr);
        return;
    }
    if (4 <= i || 4 <= j) {
        return;
    }

    if (arr[i][j + 1] != 0 && i <=3 && j <=2) {
        arr[i][j] = 2;
        find(arr, i, j + 1)
        //arr[i][j] = 1;
    }
    if (arr[i + 1][j] != 0 && i <=2 && j <=3) {
        arr[i][j] = 2;
        find(arr, i + 1, j)
        //arr[i][j] = 1;
    }

}

let arr = [[1, 0, 0, 0], [1, 1, 0, 0], [0, 1, 0, 0], [1, 1, 1, 1]]
let i = 0;
let j = 0;

console.log(find(arr, i, j));