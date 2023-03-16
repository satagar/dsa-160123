// ternary search

/*
let arr=[23,45,80,87,89,98,100];
let key=33;

function ternarySearch(arr,key,l,r){
    
    while(l<=r){
        let mid1=l+Math.floor((r-l)/3)
        let mid2= r-Math.floor((r-l)/3)

        if(arr[mid1]==key || arr[mid2]==key){
            return "found"
        }else if(key < arr[mid1]){
            r=mid1-1
        }else if(key > arr[mid2]){
            l=mid2+1
        }else{
            l=mid1+1;
            r=mid2-1
        }
    }
    return -1
}
console.log(ternarySearch(arr,key,0,arr.length-1));

let arr=[23,45,80,87,89,98,100];
let key=80;

function ternaryRecursiveSearch(arr,key,l,r){
    if(l>r){
        return -1;
    }
    let mid1=l+Math.floor((r-l)/2)
    let mid2=r-Math.floor((r-l)/2)
    if(arr[mid1]==key){
        return mid1;
    }else if(arr[mid2]==key){
        return mid2;
    }else if(key < arr[mid1]){
        return ternaryRecursiveSearch(arr,key,l,mid1-1)
    }else if(key> arr[mid2]){
        return ternaryRecursiveSearch(arr,key,mid2+1,r)
    }else{
        return ternaryRecursiveSearch(arr,key,mid1+1,mid2-1)
    }
    
}
console.log(ternaryRecursiveSearch(arr,key,0,arr.length-1));
*/

//Binary Search Problems
/*
whether the given N is duplicate in the Array or not. If it is duplicate 
output as “FALSE” if it is non duplicate output as “TRUE”.
findNumber = 5;
*/
/*
let arr = [1, 3, 4, 5, 7, 8, 9];
let num=5;
function searchNum(arr,num){
    let l=0, r=arr.length-1;
    while(l<r){
        let mid = Math.floor((l+r)/2)
        if(num==arr[mid]){
            if(num ==arr[mid-1] || num==arr[mid+1]){
                return false
            }else{
                return true
            }
        }else if(num<arr[mid]){
            r=mid-1
        }else{
            l=mid+1
        }
    }
}
console.log(searchNum(arr,num));
*/

/*
let arr = [1, 3, 5, 5, 7, 8, 9];
function searchRecursiveNum(arr,num,l,r){
    if(l>r){
        return -1;
    }
    let mid=Math.floor((l+r)/2)
    if(num==arr[mid]){
        if(num==arr[mid-1] || num == arr[mid+1]){
            return false
        }else{
            return true
        }
    }else if(num < arr[mid]){
        return searchRecursiveNum(arr,num,l,mid-1)
    }else{
        return searchRecursiveNum(arr,num,mid+1,r)
    }
}
console.log(searchRecursiveNum(arr,4,0,arr.length-1));
*/

//Problem statement 2
//Input: arr = [1, 3, 4, 5, 7, 10, 11, 12] , sum = 9 
// Output: 5 4 
// There is a subset (4, 5) with sum 9

let arr = [1, 3, 4, 5, 7, 10, 11, 12];
let sum=4;

function subSetSum(arr,sum){
    let l=0,r=arr.length-1;

    while(l<=r){
        let mid=Math.floor((l+r)/2);
        if(arr[mid] + arr[mid-1] == sum){
            return [arr[mid-1], arr[mid]]
        }else if(arr[mid] + arr[mid+1] == sum){
            return [arr[mid], arr[mid+1]]
        }else if(arr[mid] + arr[mid -1] > sum || arr[mid]+arr[mid+1] >sum){
            r=mid-2;
        }else{
            l=mid+2
        }
    }
    return [-1, -1]
}
console.log(subSetSum(arr,sum));