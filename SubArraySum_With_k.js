//You are given an array of integers nums and value K, find the total numbers of continuous subbarray whoose sum equal to k.
function subArrayWithSumToK(arr,k){
    let map = {};
    let sum = 0;
    let count = 0;
    for(let val of arr){
        sum += val;

        if(sum == k){
            count++;
        }
        if(map[sum-k] != undefined){
            count += map[sum-k];
        }
        if(map[sum] != undefined){
         map[sum-k]++;
        }else{
            map[sum] = 1;
        }
    }

    return count;
}

console.log(subArrayWithSumToK([1,1,1],2));
console.log(subArrayWithSumToK([1,2,3],3));