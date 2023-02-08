function countSort(arr){
     let output =[];

     let  max = arr[0];
     for(let i=1; i<arr.length;i++){
        if(arr[i] > max){
            max=arr[i]
        }
     }
     let count = new Array(max + 1); //size -> max +1 
     count.fill(0)

     for(let i =0; i <arr.length;i++){
        count[arr[i]]++;
     }
   
     for(let i=1; i< count.length; i++){
        count[i]+=count[i - 1]
     }
     
     for(let i=arr.length - 1; i>=0; i--){
        //arr[i]
        //count[arr[i]]
        //count[arr[i]]-1
        //output[count[arr[i]] - 1]

        output[count[arr[i]] - 1]=arr[i]
        count[arr[i]]--;
     }
     return output
}

console.log(countSort([1,4,2,3,1,1]))
