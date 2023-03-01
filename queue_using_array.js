class Queue{
    constructor(){
        this.data = [];
        this.front =0;
        this.rear=0;
    }

    enqueue(data){
        this.data[this.rear] = data;
        this.rear++;
    }
    dequeue(){
        if(!this.isEmpty()){
            let element = this.data[this.front];
            this.data[this.front] = 0;
            this.front++;
            return element;
        }
    }
    isEmpty(){
        if(this.rear == this.front){
            return true;
        }
        return false;
    }
}

let q = new Queue();
q.enqueue(7);
q.enqueue(1);
q.enqueue(2);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());