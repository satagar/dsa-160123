const N = 4;

function isSafe(maze, x, y) {
    // check if the current cell is within the bounds of the maze
    // and if the cell is not blocked
    return (x >= 0 && x < N && y >= 0 && y < N && maze[x][y] === 1);
}

function solveMaze(maze, x, y, sol) {
    // if the destination is reached, the maze is solved
    if (x === N - 1 && y === N - 1) {
        sol[x][y] = 1;
        return true;
    }

    // if the current cell is a valid move
    if (isSafe(maze, x, y)) {
        // mark the current cell as part of the solution path
        sol[x][y] = 1;

        // move to the right
        if (solveMaze(maze, x, y + 1, sol)) {
            return true;
        }

        // move down
        if (solveMaze(maze, x + 1, y, sol)) {
            return true;
        }

        // if none of the moves work, backtrack
        sol[x][y] = 0;
        return false;
    }

    return false;
}

let maze = [    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1]
];

let sol = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

if (solveMaze(maze, 0, 0, sol)) {
    console.log(sol);
} else {
    console.log("No solution found");
}
