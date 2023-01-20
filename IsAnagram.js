var inputStr1="silent", inputStr2="listen";

function isAnagram(str1,str2){

    if(str1.length!==str2.length) return false;

    const countArr=new Array(26).fill(0);

    for(let i=0; i<str1.length; i++){
        countArr[str1.charCodeAt(i)-97]++
    }

    for(let i=0; i<str2.length; i++){
        countArr[str2.charCodeAt(i)-97]--
    }

    for(let i=0; i<countArr.length;i++){
        if(countArr[i]!==0) return false;
    }

    return true;
}

console.log(isAnagram(inputStr1,inputStr2));