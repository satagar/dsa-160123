class stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }  
push(element){
    this.data[this.top]=element;
    this.top++
 } 
isEmpty(){
    if(this.top==0){
        return true;
    }
    return false;
 }
pop(){
    if(this.isEmpty()){
        throw new Error('stack empty!')
    }
    this.top--
    let element = this.data[this.top];
    return element;
}
peek(){
//peek functionality by just getting the value of the data at top position.
    if(this.isEmpty()){
        return null;
    }
    return this.data[this.top-1]
 }
print(){
    for(let i=this.top-1; i>=0; i--){
      console.log (this.data[i])
    }
 }
 reverse(){
    if(this.top==0){
        return;
    }
    this.top--;
    let current = this.data[this.top]
    this.reverse();
    console.log(current)
    this.top++;
 }
}
const myStack = new stack();
console.log(myStack.isEmpty())
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);
// myStack.pop()
// myStack.pop()
// myStack.print()
myStack.reverse();