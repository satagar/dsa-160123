// Time complexity :- O(n.2^n)
function subsetsRecursion(set, n, arr) {
    if (n === set.length) {
        console.log(arr);
        return;
    }

    arr.push(set[n]);
    subsetsRecursion(set,n+1,arr);
    arr.pop();
    subsetsRecursion(set,n+1,arr);

}

let set = ['a', 'b', 'c'];
let arr = [];
subsetsRecursion(set, 0, arr);
