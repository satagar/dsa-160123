let arr= [1, 0, 0];
let n= arr.length;
let count=0;
while(!issorted(arr, n))  // issorted function calling
{
    swap(arr, n);        // swap function calling
}
function issorted(arr, n)    // issorted function declaration
{
    for(let i=0; i<n-1; i++)
    {
        if(arr[i] <= arr[i+1])
        {
            return true;
        }
        else{
            return false;
        }
    }
}
function swap(arr, n)       // swap function declaration
{
    for(let i=0; i<n-1; i++)
    {
        if(arr[i] ==1 && arr[i+1]== 0)
        {
            arr[i]=0;
            arr[i+1] =1;
            count+= 1;
        }
    }
    console.log(count);
}
// here tc= o(n-1)+o(n-1) = o(2*(n-1)) =o(n-1)= o(n)
// here sc = count+i = o(1)