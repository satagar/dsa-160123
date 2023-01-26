let res = 1e9;
function findPrice(n, flights, src, dst, k, temp, price) {
    
    if (dst === src) {
        res = Math.min(temp, res);
        return;
    }
    if(k < 0){
        return;
    }
    if (k >= 0) {
        for (let i = 0; i < flights.length; i++) {
            if (flights[i][0] === src) {
                src = flights[i][1]
                temp = temp + flights[i][2];
                findPrice(n, flights, src, dst, k - 1, temp, price);
                src = flights[i][0]
                temp = temp - flights[i][2];
            }
        }
    }
}

var findCheapestPrice = function (n, flights, src, dst, k) {
    findPrice(n, flights, src, dst, k, 0, 1e9);
    if (res === 1e9) {
        return -1;
    } else {
        return res;
    }
};

console.log(findCheapestPrice(4,[[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]],0,3,1));

//but this give TLE