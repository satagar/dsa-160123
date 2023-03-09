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
    size(){
        return this.rear - this.front;
    }
}

class Stack{
    constructor(){
        this.q = new Queue();
    }

    push(data){
        let len = this.q.size();
        this.q.enqueue(data);
        for(let i=0;i<len;i++){
            this.q.enqueue(this.q.dequeue());
        }
    }
    pop(){
        if(this.q.length == 0){
            return 'No element in stack'
        }

        return this.q.dequeue();
    }
}

let s = new Stack();
s.push(1);
s.push(2);
s.push(5);
s.push(3);
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());