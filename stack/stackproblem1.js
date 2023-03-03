//bruteforce Approach

// let nextGraterNumber_array = (arrs)=>{
// let nums = arrs.length;
// let result = [];
// for(let i = 0; i< nums; i++){
//     let next_ele = -1;
//     for(let j = i ; j < nums;j++){
//         if(arrs[i]<arrs[j]){
//             next_ele = arrs[j]
//           break;
//         }
//     }
//     result.push(next_ele);
//  }
//  return result
// }
// let arrs = nextGraterNumber_array([2,7,3,5,4,6,8]);
// console.log(arrs)
//-----------------------------------------------------------------//
//stcak approach 
class Stack{
    constructor(){
        this.data = [];
        this.top= 0
    }
push(value){
    this.data[this.top]=value;
    this.top++
}
pop(){
    this.top--;
    return this.data[this.top];
}
isEmpty(){
    return this.top = 0;
}
print(){
    for(let i = this.top;i>=0;i--){
        console.log(this.data[i]);
    }
}
peek(){
    return this.data[this.top-1]
}
}
function nextgrater(arr,n){
    const stack = new Stack();
    const result = new Array(n).fill(-1);
    
    for(let i = 0; i < n-1; i++){
        if(arr[i]< arr[i+1]){
            result[i] = arr[i+1];

            while (arr[stack.peek()] < arr[i+1]){
                const index = stack.pop();
                result [index] = arr[i+1]
            }
        }else {
            stack.push(i)
        }
    }
console.log(result)
}
let arrs = nextgrater([2,7,3,5,4,6,8],7);
console.log(arrs)
