class Stack {
    constructor() {
      this.data = [];
      this.top = 0;
    }
  
    push(data) {
      this.data[this.top] = data;
      this.top++;
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("Underflow!");
      }
      this.top--;
      let data = this.data[this.top];
      return data;
    }
  
    peek() {
      return this.data[this.top - 1];
    }
  
    print() {
      for (let i = this.top - 1; i >= 0; i--) {
        console.log(this.data[i]);
      }
    }
  
    isEmpty() {
      return this.top == 0;
    }
  }
  
  function balancedString(str) {
    var s = new Stack();
    s.push(str[str.length - 1]);
    let count = 0;
    for (let i = str.length - 2; i >= 0; i--) {
      if (str[i] == "b" && s.peek() == "a") {
        s.pop();
        count++;
      } else {
        s.push(str[i]);
      }
    }
    console.log(count);
  }
  
  balancedString("aababbab");
  balancedString("baaabbba");
  balancedString("bbaaabbba");
  