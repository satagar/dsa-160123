function bucketSort(arr){
    let max=Math.max(...arr)
    let min=Math.min(...arr)
    let size=Math.floor(max/10)-Math.floor((min/10))+1
    let b=new Array(size).fill(0)
    
    for(let i=0;i<size;i++){
        b[i]=[]
    }
    
    for(let i=0;i<arr.length;i++){
       let key= Math.floor(arr[i]/10)-1
       b[key].push(arr[i])
    }
    //console.log(b)
    for(let i=0;i<size;i++){
        b[i].sort()
    }
    let result=[]
    for(let i=0;i<size;i++){
        for(let j=0;j<b[i].length;j++){
            result.push(b[i][j])
        }
    }
    return result
}
console.log(bucketSort([29,34,19,39,21,41]))