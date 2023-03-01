class Stack {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    push(value) {
      this.queue1.push(value);
    }
  
    pop() {
      if (this.queue1.length === 0) {
        return undefined;
      }
  
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
      const top = this.queue1.shift();
      const temp = this.queue1;
      this.queue1 = this.queue2;
      this.queue2 = temp;
  
      return top;
    }
  }


const stack = new Stack();

stack.push(4);
stack.push(1);
stack.push(2);
stack.push(3);


console.log(stack.pop()); 
console.log(stack.pop()); 

console.log(stack.pop()); 
console.log(stack.pop()); 

  