var ch=[]
var s="listen"
var t="silent"
for(let i=0;i<s.length;i++)
{
    var n=s.charCodeAt(i)
    if(!ch[n-97])
    {
        ch[n-97]=1
    }
    else if(ch[n-97])
    {
        ch[n-97]+=1
    }
}
for(let i=0;i<t.length;i++)
{
    var n=t.charCodeAt(i)
    
    
        ch[n-97]-=1
    
    
    
}
console.log(ch)