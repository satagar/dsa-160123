let arr=[-5,3,-4,88,-9,-10,21,5,6];

function negativeEnd(arr){
    let left=0,right=arr.length-1;
    while(left<right){
        if(arr[left]<0 && arr[right]>0){
            let temp=arr[left];
            arr[left]=arr[right];
            arr[right]=temp;
            left++;
            right--;
        }else if(arr[left]>0){
            left++
        }else if(arr[right]<0){
            right--
        }

    }
    return arr;
}

console.log(negativeEnd(arr));