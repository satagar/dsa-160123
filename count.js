var arr=[1,2,4,3,1,1,5,6]
function countsort(arr)
{
var min=Math.min(...arr)
var max=Math.max(...arr)
var arr2=Array((max-min)+1).fill(0)
arr.forEach((e)=>{
    arr2[e-min]+=1
})
arr4=[]
arr4[0]=arr2[0]
for(let i=1;i<arr2.length;i++)
{
    arr4[i]=arr4[i-1]+arr2[i]
}

var arr3=Array(arr.length).fill(0)
arr.forEach((e)=>{
    var i=arr4[e-min]-1
    arr3[i]=e
    arr4[e-min]-=1
    
})
return arr3
}
console.log(countsort(arr))