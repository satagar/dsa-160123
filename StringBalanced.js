function stringBalance(s){
    let stack = [];
    let count = 0;
    stack.push(s[0]);
    for(let str = 1;str<s.length;str++){
        let length = stack.length;
        if(length && s[str] == 'a' && stack[length-1] == 'b'){
            stack.pop();
            count++;
        }else{
            stack.push(s[str]);
        }
    }
    return count;
}

console.log(stringBalance('aaabba'));
console.log(stringBalance('aababbab'));