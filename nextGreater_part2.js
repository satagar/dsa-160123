var nextGreaterElements = function(nums) {
    let len = nums.length;
    let arr = new Array(len).fill(-1);
    let stack = [];
    for(let i=0;i<nums.length *2;i++){
        while(stack.length !=0 && nums[stack[stack.length-1]] < nums[ i % nums.length] ){
            let pop = stack.pop();
            arr[pop] = nums[i% nums.length];
            
        }
        if(i<len){
            stack.push(i);
        }
    }
    
    return arr;
};

let arr1 = [1,2,1];
let arr2 = [1,2,3,4,3];
let arr3 = [10,2,11,11,3]
let arr4 = [5,4,3,2,1]
let arr5 = [1,5,3,6,8]
console.log(nextGreaterElements(arr3));
//console.log(nextGreaterElements(arr2));
//console.log(nextGreaterElements(arr3));
//console.log(nextGreaterElements(arr4));
//console.log(nextGreaterElements(arr5));