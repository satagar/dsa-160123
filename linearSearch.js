let arr=[23,45,87,89,98,80];
let key=87;

function linearSearch(arr,key){
    let flag=false;
    let ind;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===key){
            flag=true;
            ind=i;
            break
        }
    }
    if(flag){
        console.log(` found ${key} at index is ${ind}`);
    }else{
        console.log("not found")
    }
}

linearSearch(arr,key);