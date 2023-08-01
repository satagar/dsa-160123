let grid = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
];

function isSafe(key,row,col){
  for(let i = 0; i < 9; i++){
    if(grid[row][i] == key || grid[i][col] == key){
      return false;
    }
  }
  
  var startRow = row - row % 3;
  var startCol = col - col % 3;
  
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      if(grid[i + startRow][j + startCol] == key){
        return false;
      }
    }
  }
  
  return true;
}

function ss(row, col){
  if(row > 8 || col > 8) return true;
  let nextRow = row, nextCol = (col + 1) % 9;
  if(col + 1 == 9){
    nextRow = row + 1;
  }
  if(grid[row][col] == 0){
    for(let i = 1; i < 10; i++){
      if(isSafe(i,row,col)){
        grid[row][col] = i;
        if(ss(nextRow, nextCol)){
          return true;
        }
        grid[row][col] = 0;
      }
    }
    return false;
  }
  else {
    return ss(nextRow, nextCol);
  }
}

ss(0,0);
console.log(grid);