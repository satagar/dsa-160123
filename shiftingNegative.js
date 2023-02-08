function shiftNegative(arr){
let left = 0;
let right = arr.length-1;

for(let i =0;i<arr.length/2;i++){
    if(arr[left]>0 && arr[right] > 0){
        left++
    }else if(arr[left]<0 && arr[right]<0){
        right--
    }
    else if(arr[left]>0 && arr[right]<0){
        left++
        right--
    }
    else if(arr[left]<0 && arr[right]>0){
        //swapping
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}
    return arr
}
  

let array = [-5,3,-4,88,-9,-10,21,5,6]
console.log(shiftNegative(array))