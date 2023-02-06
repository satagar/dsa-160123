// Time complexity :- O(n.2^n)
function printPowerSet(set, set_size) {
    var pow_set_size = parseInt(Math.pow(2, set_size));
    var counter, j;
    let arr = [];
    for (counter = 0; counter < pow_set_size; counter++) {
        let res = '';
        for (j = 0; j < set_size; j++) {
            /*
             * Check
             if jth bit in the counter is set If set then print jth element from set
             */
            console.log(1<<j);
            if ((counter & (1 << j)) > 0)
                res = res + (set[j]);
        }
        arr.push(res);
    }
    console.log(arr);
}

let set = ['a', 'b', 'c'];
printPowerSet(set, 3);
