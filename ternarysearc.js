var a=[2,3,5,7,8,9,10,13,14]
var t=11
var l=0;
var r=a.length-1
function ternary(a,t){
while(l<=r)
{
    var m1=(Math.floor((r-l)/3))+l
    var m2=r-(Math.floor((r-l)/3))
    if(a[m1]==t)
    {
        return m1
    }
    if(a[m2]==t)
    {
        return m2
    }
    if(a[m1]>t)
    {
        r=m1-1
    }
    if(a[m2]<t)
    {
        l=m2+1
    }
    if(a[m1]<t && a[m2]>t)
    {
        l=m1
        r=m2
    }
}return -1
}
console.log(ternary(a,t))