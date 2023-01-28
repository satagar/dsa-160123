// function shiftNegative(ar){
// let ar1=[]
// let ar2=[]
// ar.forEach((e)=>{
//     if(e>0){
//         ar1.push(e)
//     }
//     else{
//         ar2.push(e)
//     }
// })

// for(let i=0;i<ar1.length;i++){
//     ar[i]=ar1[i]
// }

// for(let i=0;i<ar2.length;i++){
//     ar[i+ar1.length]=ar2[i]
// }
// return ar
// }
// let arr=[-3,-5,2,8,3,-2,32]
// console.log(shiftNegative(arr))

//optimised Approach




function shiftNegative(arr){
let n=arr.length
    let i=0;j=n-1

    while(i<j){
        if(arr[i]<0 && arr[j]>0){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            //console.log(arr[i])
            i++
            j--
        }
        else if(arr[i]>0){
            i++
        }
        else if(arr[j]<0){
            j--
        }
        else{
            i++
            j--
        }
        
    }
return arr
}

let arr=[-3,-5,2,8,3,-2,32]
console.log(shiftNegative(arr))
