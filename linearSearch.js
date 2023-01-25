// function linearSearch(arr,k){
//     for(let i=0;i<arr.length;i++){
//           if(arr[i]===k)return i
//     }
//     return "no element found"
// }

// console.log(linearSearch([1,2,4,5,6,7],8))

function linearSearch(arr,k){
    let temp=[]
        for(let i=0;i<arr.length;i++){
              if(arr[i]===k) temp.push(i) 
        }
        return temp.length!=0?temp:-1
    }
    
    console.log(linearSearch([1,2,4,5,6,7,6],6))