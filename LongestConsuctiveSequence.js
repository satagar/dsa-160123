var longestConsecutive = function(arr) {
    let map = new Map();
    let ans=0;
    for(let val of arr){
          if(!map.has(val)){
          map.set(val,1);
          }
    }
    for(let i=0;i<arr.length;i++){
        if(!map.has(arr[i]+1)){
            let count = 1;
            let j = arr[i];
            while(map.has(j-1)){
                j -= 1; 
                count++;
            }
            ans = Math.max(count,ans);
        }
    }
    return ans; 
    };