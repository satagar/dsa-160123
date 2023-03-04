function find(nums, len, k) {
    let arr = [];
    let ans = [];
    for (let i = 0; i < len; i++) {   
        let current = nums[i];
        while (arr.length > 0 && i - arr[0] >= k) {
            arr.shift();
        }
        while(arr.length > 0 && nums[arr[arr.length-1]] <= current){
            arr.pop();
        }
        arr.push(i);
        if(i >= k-1){
            ans.push(nums[arr[0]]);
        }
        
    }
    return ans;
}

// let nums = [1, 3, -1, -3, 5, 3, 6, 7];
// let len = nums.length;
// console.log(find(nums, len, 3));
// nums = [1, 2, 3, 1, 4, 5, 2, 3, 6];
// len = nums.length;
// console.log(find(nums, len, 3));

let nums = [-6, -10, -7, -1, -9, 9, -8, -4, 10, -5, 2, 9, 0, -7, 7, 4, -2, -10, 8, 7];
let len = nums.length;
console.log(find(nums, len, 7));
