var a=[1,2,3,4,5]
var f=3

function linearsearch(arr,s)
{
    for(let i=0;i<a.length;i++)
    {
        if(arr[i]==s)
        {
            return true
        }
    }
    return false
}
console.log(linearsearch(a,2))