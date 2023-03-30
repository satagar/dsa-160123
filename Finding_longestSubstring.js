function longestSubstring(str){
let map = new Map();
let left = 0,ans =0;
for(let right=0;right<str.length;right++){
    let val = str[right];
    if(map.has(val)){
        left = Math.max(map.get(val),left);
    }
    ans = Math.max(ans,right-left+1);
    map.set(val,right+1);
}
return ans;
}

console.log(longestSubstring('abcabcbb'));
console.log(longestSubstring('tmmuzxt'));