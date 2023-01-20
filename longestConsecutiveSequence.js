function findLCS(arr){
let mymap = new Set();
let count=0;
for(let i=0;i<arr.length;i++){
        mymap.add(arr[i]);
}
for(let i=0;i<arr.length;i++){
    if(!mymap.has(arr[i]-1)){
        let j = arr[i];
        while(mymap.has(j+1)){
            j += 1; 
        }
        count = Math.max( j - arr[i] +1 ,count);
    }
}
return count;

}

console.log(findLCS([1,2,89,5,6,7,8,0,67,45,46,1,2,47,48,49]));