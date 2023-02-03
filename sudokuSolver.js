function findSudoku(grid, i, j) {
    if (i === n-1 && j === n) {
        //console.log('Stuck here');
        return true;
    }
    if (j === n) {
        i++;
        j = 0;
    }
    if (grid[i][j] != 0) {
        if(findSudoku(grid, i, j + 1)) return true;
    }else{
    for (let x = 1; x < 10; x++) {
        if (isSafe(grid, i, j, x)) {
            grid[i][j] = x;

            if (findSudoku(grid, i, j + 1))     
            return true;
            
        }
        grid[i][j] = 0;
        

    }
    }
  return false;
}

function isSafe(grid, row, col, num) {
    for (let i = 0; i <= 8; i++) {
        if (grid[row][i] === num) {
            return false;
        }
    }
    for (let i = 0; i <= 8; i++) {
        if (grid[i][col] === num) {
            return false;
        }
    }
    let xrow = row - row % 3;
    let ycol = col - col % 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(grid[xrow+i][ycol+j] == num){
                return false;
            }
        }
    }

    return true;

}


var n = 9;
let grid = [[3, 0, 6, 5, 0, 8, 4, 0, 0],
[5, 2, 0, 0, 0, 0, 0, 0, 0],
[0, 8, 7, 0, 0, 0, 0, 3, 1],
[0, 0, 3, 0, 1, 0, 0, 8, 0],
[9, 0, 0, 8, 6, 3, 0, 0, 5],
[0, 5, 0, 0, 9, 0, 6, 0, 0],
[1, 3, 0, 0, 0, 0, 2, 5, 0],
[0, 0, 0, 0, 0, 0, 0, 7, 4],
[0, 0, 5, 2, 0, 6, 3, 0, 0]];

let res = findSudoku(grid,0,0);
console.log(res,grid);

