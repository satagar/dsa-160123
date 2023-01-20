var arr=[6,7,8,21,23,24,25,26]

var count=0
var ans=[]
function arrycheck(arr){


for(i=0;i<=arr.length;i++) //1
{
    if(arr[i+1]==arr[i]+1)
    {
        count=count+1
      
      
    }
    else{
        ans.push(count+1)
        count=0
    }
}
}
arrycheck(arr)
console.log("count for longest consecutive sequence is  "+ Math.max(...ans))