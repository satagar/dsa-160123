function minimumPossibleInteger(str,k){
    let stack = [];
    stack.push(str[0]);
    for(let i=1;i<str.length;i++){
        let number = str[i];
        if(k > 0 && stack[stack.length-1] > number ){
            stack.pop();
            k--;
        }
        stack.push(str[i]);
    }

    if(k > 0){
        stack.pop();
        k--;
    }
    return stack.join('');
}

console.log(minimumPossibleInteger('10300',1));
console.log(minimumPossibleInteger('124',1));