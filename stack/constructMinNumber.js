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
  
  function findMin(str, k) {
    let s = new Stack();
  
    for (let i = 0; i < str.length; i++) {
      let num = Number(str[i]);
      while (s.peek() > num && k > 0) {
        s.pop();
        k--;
      }
      s.push(num);
    }
    while(k != 0){
      s.pop();
      k--;
    }
    let result = [];
    while(!s.isEmpty()){
      result.push(s.pop());
    }
    console.log(Number(result.reverse().join('')) || 0);
  }
  
  findMin('10300',1)
  findMin('121198',2)
  findMin('765028321',5)