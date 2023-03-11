function asteroids(arr){
    let stack = [];
    for(let ast of arr){
        if(ast >= 0){
            stack.push(ast);
        }else{
            while(stack.length > 0 && stack[stack.length-1] >= 0 && stack[stack.length-1] < Math.abs(ast)){ 
                stack.pop();
            }
            if(stack.length <= 0 || stack[stack.length-1] < 0){
                stack.push(ast);
            }
        }
    }
    return stack;
}



console.log(asteroids([11,16,-20]));
console.log(asteroids([11,16,-20,-25]));