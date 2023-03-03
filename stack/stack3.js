class Stack {
    constructor() {
      this.data = [];
      this.top = 0;
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
      return this.top === 0;
    }
    print() {
      for (let i = this.top; i >= 0; i--) {
        console.log(this.data[i]);
      }
    }
    peek() {
      return this.data[this.top - 1];
    }
  }
  function maxAreaHistogram(histogram) {
    const stack = new Stack();
    let maxArea = 0;
    let i = 0;
    while (i < histogram.length) {
      if (stack.length === 0 || histogram[i] >= histogram[stack[stack.length - 1]]) {
        stack.push(i);
        i++;
      } else {
        const top = stack.pop();
        const area = histogram[top] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1);
        maxArea = Math.max(maxArea, area);
      }
    }
    while (stack.length > 0) {
      const top = stack.pop();
      const area = histogram[top] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1);
      maxArea = Math.max(maxArea, area);
    }
    return maxArea;
  }
  const histogram = [2, 1, 5, 6, 2, 3];
  const maxArea = maxAreaHistogram(histogram);
  console.log(maxArea); // Output: 10  