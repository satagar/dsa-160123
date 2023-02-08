function SubsetSum(arr,sum){
    let left =0 ,right=arr.length-1
    while(left<=right){
        let mid= parseInt((left+right)/2);
        if(arr[mid]+arr[mid+1]==sum){
            return [arr[mid],arr[mid+1]];
        }
        else if(arr[mid]+arr[mid-1]==sum){
            return [arr[mid-1],arr[mid]];
        }
        else if(arr[mid],arr[mid-1]<sum || arr[mid]+arr[mid+1]<sum){
            left = mid+2;
        }
        else {
            right =mid-2
        }
    }
    return [-1,-1];
}
let array = [2,4,6,8,9,12,14,16]
let sum = 14;
console.log(SubsetSum(array,sum))