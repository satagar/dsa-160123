class Queue {
    constructor(){
      this.data = [];
      this.front = 0;
      this.rear = 0;
    }
    
    enqueue(data){
      this.data[this.rear] = data;
      this.rear++;
    }
    
    dequeue(){
      if(this.isEmpty()){
        return undefined;
      }
      const result = this.data[this.front];
      this.front++;
      return result;
    }
    
    isEmpty(){
      return this.data.length === 0;
    }
  }
  
  const q = new Queue();
  q.enqueue(10);
  q.enqueue(20);
  q.enqueue(30);
  console.log(q.dequeue());
  q.enqueue(40);
  console.log(q.dequeue());
  console.log(q.dequeue());
  console.log(q.dequeue());
  console.log(q.dequeue());