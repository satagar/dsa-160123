function countSort(arr,len){
    let  countarr = new Array(len).fill(0);
    
    for(let i=0;i<len;i++){
        let val = arr[i];
        countarr[val]++;
    }
    

    let order = [countarr[0]];
    for(let i=1;i<countarr.length+1;i++){
        if(countarr[i] !=0){
        order.push(countarr[i]+order[i-1]);
        }
    }
    console.log(countarr,order)    
    let orgarr = new Array(len);
    for(let i=0;i<arr.length;i++){
        if(countarr[arr[i]] != 0){
            let index = order[arr[i]];
            orgarr[index-1] = arr[i];
            order[arr[i]]--;
        }
    }

    console.log(orgarr);
}

console.log(countSort([1,4,2,3,1,1],6));

