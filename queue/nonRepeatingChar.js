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
    this.front++;
    return result;
  }

  isEmpty() {
    return this.rear === this.front;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.data[this.front];
    }
    return null;
  }

  size() {
    return this.rear - this.front;
  }
}

function nonRepeatingChar(str) {
  const q = new Queue();
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      // skip char and remove from queue if present
      let count = 0;
      while (count < q.size()) {
        const curr = q.dequeue();
        if (curr !== str[i]) {
          q.enqueue(curr);
        }
        count++;
      }
    }
    else {
      q.enqueue(str[i]);
      map.set(str[i], 1);
    }
    console.log(q.peek() || -1);
  }
}
nonRepeatingChar("abab");
nonRepeatingChar("abacacb");