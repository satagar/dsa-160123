
class node {
    constructor(data){
        this.data=data;
        this.previous=null;
        this.next=null;
    }
}
class doublyLinkedList {
    constructor() {
        this.head=null;
        this.size=0;
    }
   insertAtBegin(data){
    let newNode=new node(data)
    this.size++
    if(this.head==null){
        this.head=newNode;
        return;
    }
    newNode.next=this.head;
    this.head.previous=newNode;
    this.head=newNode;
   }

   insertAtEnd(data){
    let newNode=new node(data)
    this.size++
    let current=this.head;
    while(current.next!=null){
        current=current.next;
    }
    
    current.next=newNode;
    newNode.previous=current;
   }

   

    insertAtIndex(data, idx) {
        let newNode = new node(data)
        this.size++
        let curr = this.head
        
        
        while (idx - 1 > 0) {
            curr = curr.next
            idx--

        }
        let nextNode = curr.next;
        newNode.next = nextNode;
        nextNode.prev = newNode;

        curr.next =  newNode
        newNode.prev = curr;
    }

    getDataAtIdx(idx) {

       if(idx<0 || idx>=this.size){
        console.log("idx out of bound")
       }

        let curr = this.head
        while (idx > 0) {
            curr = curr.next
            idx--
        }
        console.log(curr.data)
    }

    deleteAtStart(index){
      this.size--
        if(this.head==null){
        return false;
      }
      let current = this.head;
       this.head=this.head.next;
       this.head.previous=null;
       current=null;
    }

    deleteAtIndex(index){
        this.size--
        if(index<0 || index>=this.size){
            console.log("index is not valid")
            return ;
        }
        let current=this.head;
        while(index-1>0){
         current=current.next;
         index--
        }
        let nextNode=current.next;
        current.next=nextNode.next;
        nextNode.next.previous=current;
    }


    pritlist() {
        let curr = this.head;
        while (curr != null) {
            console.log(curr.data)
            curr = curr.next
        }
    }
}

const Dlist = new doublyLinkedList();
Dlist.insertAtBegin(10)
Dlist.insertAtBegin(20)
Dlist.insertAtEnd(30)
Dlist.insertAtIndex(500,2)
Dlist.getDataAtIdx(0)
//Dlist.pritlist();
Dlist.deleteAtStart()
Dlist.deleteAtIndex(1)
Dlist.pritlist();

