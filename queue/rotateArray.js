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
  
  class Queue {
    constructor() {
      this.data = [];
      this.front = 0;
      this.rear = 0;
    }
  
    enqueue(data) {
      this.data[this.rear] = data;
      this.rear++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return undefined;
      }
      const result = this.data[this.front];
      this.data[this.front] = 0;
      this.front++;
      return result;
    }
  
    isEmpty() {
      return this.data.length === 0;
    }
  
    print() {
      for (let i = this.front; i < this.rear; i++) {
        console.log(this.data[i]);
      }
    }
  }
  
  function reverse(arr, k) {
    let n = arr.length;
    let s = new Stack();
    let q = new Queue();
  
    for (let i = 0; i < n; i++) {
      q.enqueue(arr[i]);
    }
  
    for (let i = 0; i < k; i++) {
      s.push(q.dequeue());
    }
  
    while (!s.isEmpty()) {
      q.enqueue(s.pop());
    }
  
    while (n - k != 0) {
      k++;
      q.enqueue(q.dequeue());
    }
  
      q.print();
  
  }
  
  reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)
  