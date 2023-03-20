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
  
  function postfixEvaluate(str) {
    let result,
      i = 0;
    let s = new Stack();
  
    while (!Number.isNaN(Number(str[i]))) {
      s.push(Number(str[i]));
      i++;
    }
  
    while (i < str.length) {
      result = evaluate(s, str[i]);
      s.push(result);
      i++;
    }
    console.log(s.pop());
  }
  
  function evaluate(s,op){
    let x = s.pop(), y = s.pop();
    switch(op){
      case '+': return x + y;
      case '-': return y - x;
      case '*': return y * x;
      case '/': return y / x;
    }
  }
  
  postfixEvaluate('124*+');
  postfixEvaluate('6784/+-');