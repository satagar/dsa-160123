function isSafe(board, row, col, n) {

    //check left in col
    for (let i = 0; i < col; i++) {
        if (board[row][i] == 'Q') {
            return false;
        }
    }
    // check upper left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == 'Q') {
            return false;
        }
    }
    // check bottom left diagonal
    for (let i = row + 1, j = col - 1; i < n && j >= 0; i++, j--) {
        if (board[i][j] == 'Q') {
            return false;
        }
    }
    return true;
}

function getQueen(board, n, col, ans) {

    if (col === n) {
        let strArray = [];
        for (let i = 0; i < n; i++) {
            let tempstr = '';
            for (let j = 0; j < n; j++) {
                tempstr += board[i][j];
            }
            strArray.push(tempstr);
        }
        ans.push(strArray);
        return;
    }

    for (let i = 0; i < n; i++) {
        if (isSafe(board, i, col, n)) {
            board[i][col] = 'Q';
            getQueen(board, n, col + 1, ans);
            board[i][col] = '.';
        }
    }
}

(function () {
    let n = 4;
    const board = Array(n).fill().map((item) => Array(n).fill('.'));
    let ans = [];
    getQueen(board, n, 0, ans);
    if (ans.length === 0) {
        console.log('NoQueencan be placed');
    } else { console.log(ans); }

})();
