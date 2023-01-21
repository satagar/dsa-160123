let inputArr=[3,88,21,5,6];


function cyclicRotate(arr){
    let size=arr.length;
    let lastElement=arr[size-1]

    for(let i=0; i<size-1; i++){
        let temp=arr[i];
        arr[i]=lastElement;
        lastElement=temp;
    }

    return arr;

}

console.log(cyclicRotate(inputArr));