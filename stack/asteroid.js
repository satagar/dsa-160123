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
  
  function asteroid(arr) {
    var s = new Stack();
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
        s.push(arr[i]);
      } else {
        while (!s.isEmpty() && s.peek() > 0 && s.peek() <= Math.abs(arr[i])) {
          s.pop();
        }
        if (s.isEmpty() || s.peek() < 0) {
          s.push(arr[i]);
        }
      }
    }
    const result = [];
    while (!s.isEmpty()) {
      result.push(s.pop());
    }
  
    console.log(result.reverse());
  }
  
  asteroid([11, 16, -20]);
  asteroid([5, 4, -2]);
  asteroid([-5, 5]);
  asteroid([10, 2, -5]);
  