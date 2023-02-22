var arr=[2,7,3,5,4,6,8]

for(let i=0;i<arr.length;i++)
{   var b=1
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[j]>arr[i])
        {
            arr[i]=arr[j]
            b=0
            break
        }
    }
    if(b)
    {
        arr[i]=0
    }
}
console.log(arr)