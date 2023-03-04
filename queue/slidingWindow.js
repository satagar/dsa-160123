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

  print() {
    const result = [];
    for (let i = this.front; i < this.rear; i++) {
      result.push(this.data[i]);
    }
    console.log(result);
  }
}

function slidingWindow(arr, k) {
  const n = arr.length;
  const q = new Queue();
  const result = [];

  for (let i = 0; i < k; i++) {
    if (!q.isEmpty() && arr[i] > q.peek()) {
      q.dequeue();
    }
    q.enqueue(arr[i]);
  }

  result.push(q.peek());

  for (let i = k; i < n; i++) {
    if (arr[i - k] === q.peek()) {
      q.dequeue();
    }
    let count = q.size();
    while (count > 0) {
      const curr = q.dequeue();
      if (arr[i] < curr) {
        q.enqueue(curr);
      }
      count--;
    }
    q.enqueue(arr[i]);
    result.push(q.peek());
  }
  return result;
}
console.log(slidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(slidingWindow([1, 2, 3, 1, 4, 5, 2, 3, 6], 3));
