function linearsearch(arr, key)
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] == key)
        {
            return i;
        }
        
    }
    return -1;
}
let arr= [15,18,24, 67, 96];
let key= 67;
console.log(linearsearch(arr, key));