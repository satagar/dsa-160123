class Node{
    constructor(data)
    {
        this.data=data,
        this.next=null,
        this.prev=null
    }
}

class Doublelist
{
    constructor()
    {
        this.head=null,
        this.size=0
    }
    insertatbegining(data)
    {
        var newnode=new Node(data)
        this.size++
        if(this.head==null)
        {
            newnode.next=this.head
            this.head=newnode
            return
        }
        newnode.next=this.head
        this.head.prev=newnode
        this.head=newnode
        return

    }
}
var dll=new Doublelist()
dll.insertatbegining(10)
dll.insertatbegining(20)
console.log(dll)