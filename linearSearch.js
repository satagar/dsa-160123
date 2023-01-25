function linearSearch(arr,n){
    var temp=[]
    for(let i=0;i<arr.length;i++){
    if(arr[i]==n){
    temp.push(i)
    }
    }
    return temp
}
    var arr=[2,5,6,11,66,3,6,9]
    console.log(linearSearch(arr,6));