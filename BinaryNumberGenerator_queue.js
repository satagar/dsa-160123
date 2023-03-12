function BinaryGenerator(n){
let queue = [];
queue.push('1');
while(n){
    n--;
    let curr= queue.shift();
    queue.push(curr+'0');
    queue.push(curr+'1');
    console.log(curr);
}
}

BinaryGenerator(5);