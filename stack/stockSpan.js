class Stack_a {
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
      return this.data[this.top-1];
    }
  }
  
  function stockSpanProblem(arrs) {
    const stack = new Stack_a();
    stack.push(0);
    const result_array = new Array(arrs.length).fill(-1);
    for (let start = 1; start < arrs.length; start++) {
      while(arrs[stack.peek()] < arrs[i]){
        stack.pop();
      }

      if(!stack.isEmpty()){
        result_array[i] = stack.peek();
      }

      stack.push(i);
    }
    const output = [];
    for (let start = 0; start < result_array.length; start++)
      output.push(start - result_array[start]);
    return output;
  }
  const data = [100, 80, 60, 70, 60, 75, 85];
  console.log(stockSpanProblem(data));