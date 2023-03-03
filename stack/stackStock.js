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
  function stock (arr){
    const n = arr.length;
    const indexArr = new Array(n).fill(-1);
    const resultArr = new Array(n).fill(0)
    const stack =new Stack();
    stack.push(arr[0]);

    for(let i = 1; i<n;i++){
        while (!stack.isEmpty() && arr[stack.peek()< arr[i]]){
            stack.pop();
        }
        if(!stack.isEmpty()){
            indexArr[i] = stack.peek()
        }
        stack.push(i)
    }
    for (let i=0; i < n; i++){
        resultArr[i] = i-indexArr[i]
    }
    return resultArr;
  }
  const data = [100,80,60,70,60,75,85]
  console.log(stock(data))