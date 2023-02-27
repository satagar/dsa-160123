class Queue {
    constructor() {
      this.data = [];
      this.front = 0;
      this.rear = 0;
    }
  
    enqueue(element) {
      this.data[this.rear] = element;
      this.rear++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
  
      const element = this.data[this.front];
      this.front++;
      if (this.front === this.rear) {
        this.front = 0;
        this.rear = 0;
      }
  
      return element;
    }

    isEmpty() {
      return this.front === this.rear;
    }

    peek() {
      if (this.isEmpty) {
        return null;
      }
  
      return this.data[this.front];
    }
  
  }
  
  function findFirstNonRepeatingChar(str) {
    const queue = new Queue();
    const charCount = {};
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      charCount[char] = (charCount[char] || 0) + 1;
  
      if (charCount[char] === 1) {
        queue.enqueue(char);
      }
  
      while (!queue.isEmpty() && charCount[queue.peek()] > 1) {
        queue.dequeue();
      }
    }

    return queue.isEmpty() ? null : queue.peek();
  }
  
  

  const str = "aabbcdde";
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar); 
