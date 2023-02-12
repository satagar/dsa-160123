function subArrayWithZeroSum(arr) {

    var map = new Map();
    var n = arr.length;
    var output = new Array();

    var sum = 0;
    for (var i = 0; i < n; i++) {

        sum += arr[i];

        if (sum == 0) {
            const pair = {
                key: 0,
                value: i
            };
            output.push(pair);
        }
        var tempArray = new Array();

        if (map.has(sum)) {

            tempArray = map.get(sum);
            for (var j = 0; j < tempArray.length; j++) {
                const pair = {
                    key: tempArray[j] + 1,
                    value: i
                };
                (output.push(pair) > 0);
            }
        }
        tempArray.push(i);
        map.set(sum, tempArray);
    }
    //console.log(output)
    if (output.length == 0) {
        console.log("No subarray having zero sum exists");
    }
    else {
        print(output);
    }

}

function print(out) {
    for (var i = 0; i < out.length; i++) {
        var p = out[i];
        console.log("Index " + p.key + " to " + p.value + "\n");
    }
}

var arr = [0, 2, 4, -1, -3, 4, -5, 5];
var output = subArrayWithZeroSum(arr);



