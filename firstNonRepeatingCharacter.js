function find(s,len){
let str = '';
let queue = [];
let map = new Map();
for(let i=0;i<len;i++){
    let x = s[i];
    if(!map.has(x)){
        map.set(x,1);
        queue.push(x);
    }else if(map.get(x) > 0){
        map.set(x,2);
        while(queue.length > 0 && map.get(queue[0])  > 1){
            queue.shift();
        }
    }

    if(queue.length == 0){
        str += '-1';
    }else{
        str += queue[0];
    }
}
return str;
}

var s = 'abab';
var len = s.length;
console.log(find(s,len));

s = 'abacacb';
len = s.length;
console.log(find(s,len));