function removeDuplicates(str){
    for(let i = 1; i < str.length; i++){
      if(str[i] == str[i-1]){
        return removeDuplicates(str.substring(0,i-1) + str.substring(i+1))
      }
    }
    return str
  }
  
  class Stack {
      constructor() {
        this.top = 0;
        this.data = [];
      }
    
      push(value) {
        this.data[this.top] = value;
        this.top++;
      }
    
      pop() {
        this.top--;
        return this.data[this.top];
      }
    
      isEmpty() {
        return this.top == 0;
      }
    
      print() {
        for (let i = this.top - 1; i >= 0; i--) {
          console.log(this.data[i]);
        }
      }
    
      peek(){
        if(this.isEmpty()){
          return null;
        }
        return this.data[this.top - 1];
      }
    }
  
  function removeDuplicatesStack(str){
    const stack = new Stack();
    stack.push(str[0])
    for(let i = 1; i < str.length; i++){
      if(str[i] == stack.peek()){
        stack.pop();
      }
      else{
        stack.push(str[i]);
      }
    }
    let result = [];
    while(!stack.isEmpty()){
      result.push(stack.pop())
    }
    return result.reverse().join('');
  }
  
  console.log(removeDuplicatesStack("pbbcggttciiippooaais"));