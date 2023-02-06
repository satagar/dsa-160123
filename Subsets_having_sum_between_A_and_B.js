function generateSubsets(set, st, end, currentsum, arr) {
    if (st === end + 1) {
        arr.push(currentsum);
        return;
    }
    generateSubsets(set, st + 1, end, currentsum + set[st], arr)
    generateSubsets(set, st + 1, end, currentsum, arr);

    return arr;
}
function findLowerbound(s, x) {
    let st = 0;
    let end = s.length - 1;
    while (st <= end) {
        let mid = parseInt((st + end) / 2);
        if (s[mid] >= x) {
            end = mid - 1;
        } else {
            st = mid + 1;
        }

    }
    return st;
}
function findUpperbound(s, x) {
    let st = 0;
    let end = s.length - 1;
    while (st <= end) {
        let mid = parseInt((st + end) / 2);
        if (s[mid] <= x) {
            st = mid + 1;
        } else {
            end = mid-1;
        }

    }
    return  s[end] <= x ? end + 1 : end;

}

function findSubsetsCount(set, len, A, B) {
    const s1 = generateSubsets(set, 0, parseInt(len / 2), 0, []);
    const s2 = generateSubsets(set, parseInt(len / 2) + 1, len - 1, 0, []);
    s1.sort((a, b) => {
        return a - b;
    });

    let count = 0;
    console.log(s1);
    for (let i = 0; i < s2.length; i++) {
        let lower = findLowerbound(s1, A - s2[i]);
        let upper = findUpperbound(s1, B - s2[i]);

        count += upper - lower;
    }
    return count;


}
console.log(findSubsetsCount([1, -2, 3], 3, -1, 2));