function BinarySearching (array, value){
    let n = array.length ;
    let start=0;
    let end = n-1
    
    array.sort((a, b) => a - b)

    for(let start=0;start<=n;start++){

    let mid = Math.floor((start + end)/2);

    if(array[mid]===value){
        return true;
    }
    else if (array[mid] < value){
        start = mid + 1;
    }
    else {
        end = mid - 1
    }
 }
 return false;

}
const array = [41,78,9,7,9,7,4,5,7,4,447,75,6,95]
const value = 5;
console.log(BinarySearching(array,value))