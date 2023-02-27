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
  
  function histogram(arr) {
    const n = arr.length;
    const ple = getPLE(arr, n);
    const rle = getRLE(arr, n);
    let result = 0;
    for (let i = 0; i < n; i++) {
      result = Math.max((rle[i] - ple[i] - 1) * arr[i], result);
    }
    return result;
  }
  
  function getPLE(arr, n) {
    const result = new Array(n).fill(-1);
    const stack = new Stack();
    stack.push(0);
    for (let i = 1; i < n; i++) {
      while (arr[stack.peek()] >= arr[i]) {
        stack.pop();
      }
      if (!stack.isEmpty()) {
        result[i] = stack.peek();
      }
      stack.push(i);
    }
    return result;
  }
  
  function getRLE(arr, n) {
    const result = new Array(n).fill(n);
    const stack = new Stack();
    stack.push(arr[n - 1]);
  
    for (let i = n - 2; i >= 0; i--) {
      while (arr[stack.peek()] > arr[i]) {
        stack.pop();
      }
  
      if (!stack.isEmpty()) {
        result[i] = stack.peek();
      }
  
      stack.push(i);
    }
    return result;
  }
  
  function maxRectangle(arr) {
    const m = arr.length;
    const n = arr[0].length;
    let result = 0;
    for (let i = 1; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[i][j] == 1) {
          arr[i][j] += arr[i - 1][j];
        }
      }
      result = Math.max(result, histogram(arr[i]));
    }
    return result;
  }
  let data = [[1, 0, 1, 0, 0], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1],[1, 0, 0, 1, 0]];
  console.log(maxRectangle(data));
  void (data = [[0,1,1,0],[1,1,1,1],[1,1,1,1],[1,1,0,0]]);
  console.log(maxRectangle(data));
  