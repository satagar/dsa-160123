function twoAnagram(a,b){
    let ar1=new Array(26).fill(0)

    if(a.length!==b.length) return false

    for(let i=0;i<a.length;i++){
     let char=a[i].charCodeAt(0)-'a'.charCodeAt(0)
     ar1[char]++
    
} 

for(let i=0;i<b.length;i++){
    let char=b[i].charCodeAt(0)-'a'.charCodeAt(0)
    ar1[char]--
}

for(let item of ar1){
    if(item!=0) return false
}


return true

}
let a='listen',b='silent'
console.log(twoAnagram(a,b))
