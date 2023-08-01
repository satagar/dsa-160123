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

  peek() {
    if (!this.isEmpty()) {
      return this.data[this.top - 1];
    }
    return -1;
  }
}

let nextGreaterWithStackArray = (arrs, num = arrs.length) => {
  let next_ele, elements;
  let stack_data = new Stack_a();
  let result = new Array(num).fill(-1);
  stack_data.push(arrs[0]);

  for (let start = 0; start < num; start++) {
    next_ele = arrs[start];
    if (!stack_data.isEmpty()) {
      elements = stack_data.pop();
      while (arrs[elements] < next_ele) {
        result[elements] = next_ele;
        if (stack_data.isEmpty()) {
          break;
        }
        elements = stack_data.pop();
      }
      if (arrs[elements] > next_ele) {
        stack_data.push(elements);
      }
    }
    stack_data.push(start);
  }
  console.log(result);
};

function nextGreater2(arr, n) {
  const stack = new Stack_a();
  const result = new Array(n).fill(-1);

  for (let i = 0; i < n - 1; i++) {
    while (arr[stack.peek()] < arr[i + 1]) {
      const index = stack.pop();
      result[index] = arr[i + 1];
    }
    if (arr[i] < arr[i + 1]) {
      result[i] = arr[i + 1];
    } else {
      stack.push(i);
    }
  }
  console.log(result);
}

var arr = [2, 7, 3, 5, 4, 6, 8];
nextGreaterWithStackArray(arr);
void (arr = [5, 4, 3, 2, 1]);
nextGreaterWithStackArray(arr);
nextGreater2([2, 7, 3, 5, 4, 6, 8], 7);