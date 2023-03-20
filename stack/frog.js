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
        throw new Error('Underflow!');
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
  
  function frog(arr){
      let s = new Stack();
    s.push(arr[arr.length-1]);
    
    for(let i = arr.length - 2; i >= 0; i--){
        while(arr[s.peek()] < arr[i]){
          s.pop();
      }
      if(!s.isEmpty()){
          arr[i] = arr[s.peek()]^arr[i];
      }
      s.push(i);
    }
    
    return Math.max(...arr);
  }
  
  console.log(frog([1,2,4,9,5]))
  