class Queue{
    constructor(){
        this.data = [];
        this.rear = 0;
        this.front = 0;
    }
    enqueue(value){
        this.data[this.rear] = value;
        this.rear++;
    }
    isEmpty() {
        return this.top === 0;
      }
    dequeue(){
        if(this.isEmpty()===false)
        this.data[this.front] = 0;
        this.front =this.front + 1;
        return this.data[this.front];
    }
    print(){
        let i=this.front;
        while(this.data[i]!=null){
            console.log(this.data[i]);
            i++;
        }
    }
}
const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.dequeue();
q.print()
