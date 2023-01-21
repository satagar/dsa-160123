var a=[1,2,3,4,5,6,7,8,9,10]

function addarr(ar,l)
{
    if(l<0)
    {
        return 0
    }
    var s=0
    s=ar[l]+addarr(ar,l-1)
    return s
}
console.log(addarr(a,a.length-1))