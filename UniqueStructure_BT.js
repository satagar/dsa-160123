//Given an integer n, return the number of structurally unique BST's which have exactly n nodes of unique values from 1 to n.
// Input: n = 3
// Output: 5

let dp = {0:1,1:1};

function generate(n){
if(dp[n]) return dp[n];
let total = 0;
for(let i=1;i<=n;i++){
    const a = generate(i-1);
    const b = generate(n-i);
    total += a*b;
}
dp[n] = total;
return dp[n];
}


console.log(generate(3));
console.log(generate(5));
