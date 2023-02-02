// let x = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
let x = [-1,-2,1,2,1,2,-1,-2];
// let y = [ 1, 2, 2, 1, -1, -2, -2, -1 ];
let y = [2,1,2,1,-2,-1,- 2,-1]
function KnightTour(arr, i, j, moves, size) {

    if (moves === (size * size)) {
        arr[i][j] = moves;
        return true;
    }
    for (let pos = 0; pos < size; pos++) {
        if (x[pos] + i >= 0 && y[pos] + j >= 0 && x[pos] + i < size && y[pos] + j < size && arr[x[pos] + i][y[pos] + j] == 0) {
            arr[i][j] = moves;
            if(KnightTour(arr,i+x[pos], j + y[pos], moves + 1, size))
            {return true;}
            else{
            arr[i][j] = 0;
            }
        }
    }
    return false;
}



(function () {
    let size = 8;
    let arr = new Array(size).fill(0).map((item) => new Array(size).fill(0));
    let res = KnightTour(arr, 0, 0, 1, size);
    console.log(arr);
})();