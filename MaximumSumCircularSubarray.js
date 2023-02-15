////BruteForce Approach

// function sumCirclSubArr(arr){
//     let maxi=arr[0]                      //initialise a var maxi with 0th element
//     let n=arr.length
//     for(let i=0;i<n;i++){                //iterate over array till array length
//       let cs=0                           //initialize a current Sum with 0
//         for(let j=i;j<n+i;j++){          //iterate from i to n+i coz its a circular arr from j=n the value of j started with idx 0
//         let k=j                          //initialize a var k to prevent from infinite iteration and do the further operation with k
//         if(k>=n) k=k%n                   //when k is greater or equal to array length make it k%n 
//         cs=Math.max(cs+arr[k],arr[k])    //take cs as maximum of present element or currentSum + present element
//         maxi=Math.max(cs,maxi)           //nad then take maxi as maximum of currentSUM or Maxi
//       }
//     }
//     return maxi                          //finally return maxi
//   }

//   console.log(sumCirclSubArr([5,-3,5]))
//   console.log(sumCirclSubArr([6,2,-4,-5,6]))
//   console.log(sumCirclSubArr([5,-3,5,9,-7]))
//   console.log(sumCirclSubArr([9,-2,8,-3,5]))    //tc - O(n^2)

//optimal approach
function MaxsumCirclSubArr(arr) {
let maxi=arr[0],mini=arr[0],currMaxi=0,currMini=0,n=arr.length,sum=0  
for(let i=0;i<n;i++){
    currMaxi=Math.max(arr[i],arr[i]+currMaxi)
    maxi=Math.max(currMaxi,maxi)
    currMini=Math.min(arr[i],arr[i]+currMini)
    mini=Math.min(mini,currMini)
    sum+=arr[i]
}
if(mini===sum) return maxi
return Math.max(maxi,sum-mini)
}

console.log(MaxsumCirclSubArr([5,-3,5]))
console.log(MaxsumCirclSubArr([5,-2,-3,7,2,-4]))