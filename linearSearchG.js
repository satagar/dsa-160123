function LinearSearch(arr,target){
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            result.push(i)
        }
    }
    return result
}
let arr=[33,44,23,5,46,85,4,12,5]
console.log(LinearSearch(arr, 9))