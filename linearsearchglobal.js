function linearsearchglobal(arr, key)
{ 
    let result =[];
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] == key)
        {
            result.push(i);
        }
    }
    return result;

}
let arr= [15,20,50,79,20];
let key =20;
console.log(linearsearchglobal(arr, key));

