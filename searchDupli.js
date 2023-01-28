/*
serach the duplicate in array if duplicate return true else false.
approach:- do use binary search as we find the mid check whether mid = key. if equal then check for duplicate in left or right

 */

function SearchDuplicate(arr,key){
    let left = 0;
    let right = arr.length-1

    while(left<=right){
        let mid = parseInt((left+right)/2)
        if(arr[mid]==key){
            if(arr[mid-1]==key || arr[mid+1]==key){
                return true;
            }
            return false;
        }
        else if(arr[mid]<key){
            left =mid+1
        }else{
            right = mid-1
        }
    }
    return false;

}

let array = [2,3,5,5,7,8,9,12]
let duplicateArr = 5;
console.log(SearchDuplicate(array,duplicateArr)) 