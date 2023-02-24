class Queue{
    constructor()
    {
        this.data=[]
        this.front=0
        this.rear=0
    }

    enqueue(d)
    {
        this.data[this.rear]=d
        this.rear++
    }
    dequeue()
    {   if(this.front<this.rear)
        {
        console.log(this.data[this.front])
        this.front++
        }
        else{
            console.log("Out of Bound")
        }
    }
}
var q1=new Queue()
q1.enqueue(10)
q1.enqueue(20)
q1.enqueue(30)
q1.enqueue(40)
q1.dequeue()
q1.dequeue()
q1.dequeue()
q1.dequeue()