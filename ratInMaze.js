let maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1]
];

let output = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

let n = 4;

function ratInMaze(maze, output, i, j){
	// Base case
  if( i == n-1 && j == n-1){
  	output[i][j] = 1;
    return true;
  }
  
  if(!isSafe(maze,i,j)){
  	return false;
  }
  
	output[i][j] = 1;
	if(ratInMaze(maze, output, i, j+1)){
  	return true;
  }
  
  if(ratInMaze(maze, output, i+1, j)){
  	return true;
  }
  
  output[i][j] = 0;
  return false;
}

function isSafe(maze, x, y){
	return x >= 0 && x < n && y >= 0 && y < n && maze[x][y] == 1;
}

ratInMaze(maze, output, 0, 0);

(function print(){
	for(let i = 0; i < n; i++) {
  	str = "";
    for(let j = 0; j < n; j++){
    	str+=output[i][j] + ", ";
    }
    console.log(str);
  }
})();

