function nqueen(board, n, col){
  if(col == n){
    return true;
  }
  for(let i = 0; i < n; i++){
    if(isSafe(board,i,col,n)){
      board[i][col] = 1;
      const result = nqueen(board, n, col+1);
      if(result){
        return true;
      }
      board[i][col] = 0;
    }
  }
  return false;
}

function isSafe(board, x, y, n){
  for(let i = 0; i < y; i++){
    if(board[x][i] == 1){
      return false;
    }
  }
  
  for(let i = x-1, j = y-1; i >= 0 && j >= 0; i--, j--){
    if(board[i][j] == 1){
      return false;
    }
  }
  
  for(let i = x + 1, j = y - 1; i < n && j >= 0; i++, j--){
    if(board[i][j] == 1){
      return false;
    }
  }
  
  return true;
}

function print(arr){
  for(let i = 0; i < arr.length; i++){
    var str = "";
    for(let j = 0; j < arr.length; j++){
      str+=arr[i][j] + " "
    }
    console.log(str.trim());
  }
}

(function iife(){
  var n = 4;
  var board = new Array(n).fill(0);
  for(let i = 0; i < n; i++){
    board[i] = new Array(n).fill(0);
  }
  if(nqueen(board,n,0)){
    print(board);
  }
  else {
    console.log("No solution!");
  }
})()