let n= 5;
let c= 3;

let arr = [1, 2, 8, 4, 9]


function aggressiveCows(n, c, arr){

    arr.sort();  //1, 2, 4, 8, 9

    //search space
     let left=1;
     let right = arr[ arr.length-1]
     let ans = 0;

     while( left <= right){
        let mid = parseInt((left + right) / 2);

        if(isPossible(mid, n, c, arr)){

            ans = mid;
            left = mid+1;
        }else{           
        right =mid-1;
        }
     }

     return ans;
}

function isPossible(mid, n, c, arr ){
   
    let count=1;
    let last_pos = arr[0];  //1

    for (let i=1; i < arr.length; i++){
        if(arr[i] - last_pos >= mid){
            count++;
            last_pos = arr[i];
        }
        if(count == c){
            return true;
        }
    }
    return false;
}
    console.log(aggressiveCows(n, c, arr))
