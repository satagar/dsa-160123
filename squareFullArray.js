function isSquareable(a, b) {
    let root = parseInt(Math.sqrt(a + b));
    return root * root == a + b;
}
const numSquarefulPerms = (A) => {
    let count = 0;
    let visited = {};
    let arr = [];
    A.sort((a, b) => {
        return a - b;
    });
    var findSquarefulPerms = () => {
        if (arr.length === A.length) {
            count++;
        }
        let prev;
        for (let i = 0; i < A.length; i++) {
            if (visited[i] || A[i] == prev || (arr.length > 0 && !isSquareable(A[i], arr[arr.length - 1]))) {
                continue;
            }
            visited[i] = true;
            prev = A[i];
            arr.push(A[i]);
            findSquarefulPerms();
            arr.pop();
            visited[i] = false;
        }

    }
    findSquarefulPerms();
    return count;

}

console.log(numSquarefulPerms([2, 2, 2]));
console.log(numSquarefulPerms([1, 17, 8]))