
//move all -ve element to end

// let arr=[-5,3,-4,88,-9,-10,21,5,6]


function shiftNegatives(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[left] < 0) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        right--;
      } else {
        left++;
      }
    }
    return arr;
  }
  let Array = [-5,3,-4,88,-9,-10,21,5,6];
  console.log(shiftNegatives(Array));


/*
function moveArr(arr,n){
    let temp=new Array(n)
    let j=0;
    for(let i=0;i<n;i++){
        if(arr[i]>=0){
            temp[j++]=arr[i]
        }
    }
if(j==n || j==0) return 

    for(let i=0;i<n;i++){
        if(arr[i]<0){
            temp[j++]=arr[i]
        }
    }
    for(let i=0;i<n;i++){
        arr[i]=temp[i]
    }

    return temp;
}
console.log(moveArr(arr,arr.length));


function moveEnd(arr){
    let left=0,right=arr.length-1;

    while(left<=right){
        if(arr[left]<0 && arr[right]>=0){
            let temp=arr[left]
            arr[left]=arr[right]
            arr[right]=temp;
            left++
            right--
        }else if(arr[left]<0 && arr[right]<0){
            right--
        }else if(arr[left]>=0 && arr[right]>=0){
            left++
        }else{
            left++
        }
    }
    return arr;
}
console.log(moveEnd(arr));
*/
