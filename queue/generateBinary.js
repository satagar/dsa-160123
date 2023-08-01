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
      return this.data.length === 0;
    }
    evaluate(){
      let result = 0;
      for(let i = this.rear - 1,index = 0; i >= this.front; i--,index++){
        result+= Math.pow(2,index) * this.data[i];
      }
      return result;
    }
  }
  
  function binary(n){
    let q = new Queue();
    
    q.enqueue("1");
    
    while(n--){
      var cur = q.dequeue();
      console.log(cur);
      
      q.enqueue(cur+"0");
      q.enqueue(cur+ "1");
    }
  }
  
  binary(5);