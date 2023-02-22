var a=[1,2,3,4,5,6,7,8,9,10]
var target=6
var s=0
var l=a.length-1
function binarys(a,target,s,l)
{
while(s<=l)
{
var m=Math.floor((s+l)/2)

if(a[m]==target)return m

if(a[m]<target)s=m+1
if(a[m]>target)l=m-1
}
return -1
}
console.log(binarys(a,target,s,l))