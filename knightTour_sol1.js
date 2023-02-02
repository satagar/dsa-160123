function KnightTour(arr, i, j, moves, size) {

    if (i < 0 || j < 0 || i >= size || j >= size || arr[i][j] > 0) {
        return ;
    }else if(moves === (size * size)){
        arr[i][j] = moves;
        console.log(arr);
        return true;
    }
    arr[i][j] = moves;
    if(KnightTour(arr, i - 1, j + 2, moves + 1, size)) return 'Solution exists';
    if(KnightTour(arr, i - 2, j + 1, moves + 1, size)) return 'Solution exists';
    if(KnightTour(arr, i + 1, j + 2, moves + 1, size)) return 'Solution exists';
    if(KnightTour(arr, i + 2, j + 1, moves + 1, size)) return 'Solution exists';
    if(KnightTour(arr, i + 1, j - 2, moves + 1, size)) return 'Solution exists';
    if(KnightTour(arr, i + 2, j - 1, moves + 1, size)) return 'Solution exists';
    if(KnightTour(arr, i - 1, j - 2, moves + 1, size)) return 'Solution exists';
    if(KnightTour(arr, i - 2, j - 1, moves + 1, size)) return 'Solution exists';
    arr[i][j] = 0;
}
    


(function () {
    let size = 8;
    let arr = new Array(size).fill(0).map((item) => new Array(size).fill(0));
    let res = KnightTour(arr, 0, 0, 1, size);
    console.log(res);
})();

