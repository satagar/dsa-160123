//  {[()]}  correct
//  {[(])}  incorrect

function isBalance(str){
    let arr = [];
    
    for(let s of str){
        let len = arr.length;
        if(s == '{' || s == '(' || s == '['){
            arr.push(s);
        }else{
            if(len && s == ')' && arr[len-1] == '('){
                arr.pop();
            }else if(len && s == ']' && arr[len-1] == '['){
                arr.pop();
            }else if(len && s == '}' && arr[len-1] == '{'){
                arr.pop();
            }else{
                return 'False';
            }
        }
    }
    if(arr.length > 0){
        return 'False'
    }else{
        return 'True';
    }
}

console.log(isBalance('{[)]}'));