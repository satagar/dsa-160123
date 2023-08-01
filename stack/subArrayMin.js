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
  
    peek() {
      return this.data[this.top - 1];
    }
  }
  
  function subArrayMin(arr) {
    const n = arr.length;
    const ple = getPLE(arr,n);
    const rle = getRLE(arr,n);
    let result = 0;
    for(let i = 0; i < n; i++){
      result+= ((i-ple[i]) * (rle[i] - i)) * arr[i];
    }
    return result;
  }
  
  function getPLE(arr, n){
    const result = new Array(n).fill(-1);
    const stack = new Stack();
    stack.push(0);
    for(let i = 1; i < n; i++){
      while(arr[stack.peek()] >= arr[i]){
        stack.pop();
      }
      if(!stack.isEmpty()){
        result[i] = stack.peek();
      }
      stack.push(i);
    }
    return result;
  }
  
  function getRLE(arr, n){
    const result = new Array(n).fill(n);
    const stack = new Stack();
    stack.push(arr[n-1]);
    
    for(let i = n-2; i >= 0; i--){
      while(arr[stack.peek()] > arr[i]){
        stack.pop();
      }
      
      if(!stack.isEmpty()){
        result[i] = stack.peek();
      }
      
      stack.push(i);
    }
    return result;
  }
  const data = [3, 1, 2, 4];
  console.log(subArrayMin(data));
  