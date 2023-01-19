let str1="shubham";
let str2="bhamshu";

function anagram(str1,str2){
    if(str1.length !== str2.length){
        return false
    }

    const arr =new Array(26).fill(0);

    const strArray = str1.split('');

    for(var i=0;i < strArray.length;i++){
        const charCodeIndex = strArray[i].charCodeAt(0) -"a".charCodeAt(0);
        arr[charCodeIndex]++
    }
    for(var i=0;i < str2.length;i++){
        const charCodeIndex = str2[i].charCodeAt(0) - "a".charCodeAt(0);
        arr[charCodeIndex]--;
    }

for (var i=0;i<26;i++){
    if(arr[i] !== 0){
        return false;
    }
}
return true;
}
console.log(anagram(str1, str2))