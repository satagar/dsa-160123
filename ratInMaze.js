function isSafe(maze, x, y) {
    return (x >= 0 && x < N && y >= 0 && y < N && maze[x][y] != 0);
}

function solveMaze(maze) {

    if (findMaze(maze, 0, 0) == false) {
        console.log("Solution doesn't exist");
        return false;
    }
}
function findMaze(maze, x, y) {
    if (x == N - 1 && y == N - 1 && maze[x][y] == 1) {
        maze[x][y] = 2;
        console.log(maze);
        return true;
    }
    if (isSafe(maze, x, y) == true) {
        if (maze[x][y] == 2)
            return false;
        maze[x][y] = 2;
        if (findMaze(maze, x + 1, y))
            return true;
        if (findMaze(maze, x, y + 1))
            return true;
        if (findMaze(maze, x - 1, y))
            return true;
        if (findMaze(maze, x, y - 1))
            return true;
        maze[x][y] = 1;
        return false;
    }
    return false;
}

let maze = [[1, 0, 0, 0],
            [1, 1, 0, 1],
            [0, 1, 0, 0],
            [1, 1, 1, 1]];
N = maze.length;
solveMaze(maze);