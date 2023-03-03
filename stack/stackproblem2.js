class Stack {
    constructor() {
      this.data = [];
      this.top = 0;
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
      return this.top === 0;
    }
    print() {
      for (let i = this.top; i >= 0; i--) {
        console.log(this.data[i]);
      }
    }
    peek() {
      return this.data[this.top - 1];
    }
  }
  
  function duplicates(str) {
    const stack = new Stack();
    stack.push(str[0]);
    for (let i = 1; i < str.length; i++) {
      if (str[i] == stack.peek()) {
        stack.pop();                    
      } else {
        stack.push(str[i]);
      }
    }
    const result = [];
    while (!stack.isEmpty()) {
      result.push(stack.pop());
    }
    return result.reverse().join("");
  }
  
  const string = duplicates("papabpbspscpcr");
  console.log(string);
  