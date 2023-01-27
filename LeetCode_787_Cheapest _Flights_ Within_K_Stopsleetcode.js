var findCheapestPrice = function(n, flights, src, dst, k) {
    let prices = new Array(n).fill(Infinity);
    prices[src] = 0;

    for(let i = 0; i < k + 1; i++){
        let temparr = prices.slice();
        for(let j=0;j<flights.length;j++){
            if(prices[flights[j][0]] === Infinity) continue;
            if(prices[flights[j][0]] + flights[j][2] < temparr[flights[j][1]]){
                temparr[flights[j][1]] = prices[flights[j][0]] + flights[j][2];
                console.log(temparr,prices);
            }
        }
         prices = temparr;

    }

     return prices[dst] === Infinity ?  -1 : prices[dst];
};
console.log(findCheapestPrice(4,[[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]],0,3,1));