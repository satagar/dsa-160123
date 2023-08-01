class DQueue {
    constructor(){
      this.data = [];
      this.front = 0;
      this.rear = 0;
    }
    
    addFront(data){
      if(this.front > 0){
        this.front--;
        this.data[this.front] = data;
      }
      else if(this.isEmpty()){
        this.addBack(data);
      }
      else {
        for(let i = this.rear; i > this.front; i--){
          this.data[i] = this.data[i-1];
        }
        this.data[this.front] = data;
        this.rear++;
      }
    }
    
    addBack(data){
      this.data[this.rear] = data;
      this.rear++;
    }
    
    removeFront(){
      if(this.isEmpty()){
        return undefined;
      }
      const result = this.data[this.front];
      this.data[this.front] = 0;
      this.front++;
      return result;
    }
    
    removeRear(){
      this.rear--;
      const result = this.data[this.rear];
      this.data[this.rear] = 0;
      return result;
    }
    
    isEmpty(){
      return this.data.length === 0;
    }
  }
  
  const q = new DQueue();
  q.addFront(10);
  q.addFront(20);
  q.addFront(30);
  console.log(q.removeRear());
  q.addFront(40);
  console.log(q.removeRear());
  console.log(q.removeRear());
  console.log(q.removeRear());
  console.log(q.removeRear());