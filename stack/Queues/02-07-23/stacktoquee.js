class Queue{
    constructor(){
        this.data = [];
        this.front=0;
        this.rear=0;
    }
  enqueue(value){
    this.data[this.rear]=value;
    this.rear++
  }
  dequeue(){
    let f = this.data[this.front]
    this.front++;
    return f;
  }
  isEmpty(){
    return this.front == this.rear
  }
  peek(){
    if(this.isEmpty()){
        return null;
    }
    return this.data[this.front]
  }
  size(){
    return this.rear - this.front
  }
  print(){
    let i=this.front;
    while(this.data[i]!=null){
        console.log(this.data[i])
        i++;
    }
  }
}
