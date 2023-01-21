let inputArr=[35,3,4,88,9,10,21,5,6];

//Brute Force Solution

function longConsecSeq(arr){

    let maxCount=0
    let currCount=0

    arr.sort((a,b)=>a-b);
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

//Optimized Solution using Hashed Set

function longestConsecutiveSequence(arr){

    if(arr==null || arr.length===0) return 0;

    let max=0;
    const set=new Set(arr);

    for(let num of set){
        if(set.has(num-1)) continue;

        let currNum=num;
        let currMax=1;

        while(set.has(currNum+1)){
            currMax++;
            currNum++;
        }
        max=Math.max(max, currMax);
    }
    return max;
}

console.log(longestConsecutiveSequence(inputArr))