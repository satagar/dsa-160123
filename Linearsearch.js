var a=[1,2,3,4,5,2]


function linearsearch(arr,s)
{var op=[]
    for(let i=0;i<a.length;i++)
    {
        if(arr[i]==s)
        {op.push(arr[i])
           
        }
    }
    return op
}
console.log(linearsearch(a,2))