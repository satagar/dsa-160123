function stock(prices){
    let n = prices.length ;
    const s =new Array(n).fill(1);

    for(let i =1 ; i < n ;i++){
        let j =i-1;
        while ( j >=0 && prices[i] >= prices[j]){
            s[i]++;
            j--;
        }
    }
    return s;
}
const result = [100,80,60,70,60,75,85]
console.log(stock(result))