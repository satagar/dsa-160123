/*
problem : -  find the max segemnt
input = [1,2,3,4] key=3
output= 4
*/

function segment (arr,key){
   let max= arr[0], sum=arr[0];
   for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
    sum+=arr[i]
   }

   let l=max,r=sum;
   let ans;

    while(l<=r){
        let mid = parseInt((l+r)/2);
        let count =1;
        sum=0;

        for(let i=0;i<arr.length;i++){
            sum+=arr[i];

            if(sum>mid){
                count++;
                sum=arr[i];
            }
        }
        if(count <= key){
            ans = mid;
            r=mid-1;
        }else{
            l=mid+1
        }
    }
    return ans;
}

console.log(segment([1,2,3,4],3))
// console.log(segment([1,2,3,4],3)==4)
console.log(segment([1,3,2,4,10,8,4,2,5,3],4))
// console.log(segment([1,3,2,4,10,8,4,2,5,3],4)==12)