let inputArr=[35,3,4,88,9,10,21,5,6];

function longConsecSeq(arr){

    let maxCount=0
    let currCount=0

    arr.sort((a,b)=>a-b);
    console.log(arr)
    for(let i=0; i<arr.length; i++){
        
        if(arr[i+1]-arr[i]===1){
            currCount++;
        }else{
            currCount=0;
        }

        maxCount=Math.max(currCount,maxCount)
    }

    return ++maxCount;
}

console.log(longConsecSeq(inputArr))