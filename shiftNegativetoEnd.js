function ShiftNegativeElement(arr){
    var left=0
    var right=arr.length-1;
    while(left<=right){
        if(arr[left]<0 && arr[right]>=0){
            let temp=arr[right]
            arr[right]=arr[left]
            arr[left]=temp;
           
        }
       else if(arr[left]>=0 && arr[right]<0){
            left++
            right--
        }
        else if(arr[left]<0 && arr[right]<0){
            right--

        }
        else if(arr[left]>=0 && arr[right]>=0){
            left++

        }
    }
    return arr;
}
var arr=[-1,-2,-9,6,2,7,-3,9,11]
console.log(ShiftNegativeElement(arr))