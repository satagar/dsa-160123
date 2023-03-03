function nextGreaterElements(nums) {
    const n = nums.length;
    const result = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < i + n; j++) {
        if (nums[j % n] > nums[i]) {
          result[i] = nums[j % n];
          break;
        }
      }
    }
  
    return result;
  }
const nums =[2,7,3,5,4,6,8]
const result = nextGreaterElements(nums);
console.log(result)