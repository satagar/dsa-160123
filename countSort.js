function countSort(arr){
    let n=arr.length
    let max=Math.max(...arr);
    let min=Math.min(...arr);
    let range=(max-min)+1;
    let countarr=new Array(range).fill(0);
    
    for(let i=0;i<n;i++){
        let key=arr[i]-min;
        countarr[key]++
    }

    for(let i=1;i<range;i++){
        countarr[i]=countarr[i]+countarr[i-1]
    }
    
    let result=new Array(n).fill(0);
    for(let i=0;i<n;i++){
        let index=countarr[arr[i]-1]-1;
        result[index]=arr[i];
        countarr[arr[i]-1]--
    }
    return result

}
console.log(countSort([1,4,2,3,1,1]))