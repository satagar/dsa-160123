function TernarySearch(left,right,key,arr){
let mid1 = left + parseInt((right-1)/3)
let mid2 = right - parseInt((right-1)/3)

if(key<arr[mid1]){
    return TernarySearch(left,mid1-1,key,arr)
}else if(key>arr[mid2]){
    return TernarySearch(mid2+1,r,key,arr)
}else{
    return TernarySearch(mid1+1,mid2-1,key,arr)
}
}