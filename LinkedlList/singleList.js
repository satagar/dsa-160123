class node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class sList {
    constructor(){
        this.head=null;
        this.size=0;
    }


  insertAtBegin(data){
    let newNode=new node(data)
    this.size++;
    if(this.head==null){
        this.head=newNode;
        return
    }
    newNode.next=this.head;
    this.head=newNode;
  }

  insertAtEnd(data){
    let newNode=new node(data)
    this.size++;
    let current=this.head;
    while(current.next!=null){
        current=current.next
    }
    current.next=newNode
  }

insertAtIndex(data,index){
    if(index==0){
        this.insertAtBegin(data);
    }
    if(index>=this.size || index<0){
        console.log("Array Index Out Of Bound enter valid index")
    }
    let newNode=new node(data)
    this.size++;
    let current=this.head;
    while(index-1>0){
        current=current.next;
        index--
    }
    newNode.next=current.next; //store address of the current.next in newNode.next 
    current.next=newNode;
}

print(){
    let current=this.head;
    while(current!=null){
        console.log(current.data)
        current=current.next
    }
}

getData(index){
    if(index>=this.size || index<0){
        console.log("Array Index Out Of Bound enter valid index")
    }
    let current=this.head
    while(index>0){
        current=current.next;
        index--;
    }
    console.log(current.data);
}

deleteAtStart(){
    if(this.head==null){
        return;
    }
    let current=this.head
    this.head=this.head.next;
    current=null;
    this.length--
}

deleteAtIndex(index){
    if(index>=this.size || index<0){
        console.log("Array Index Out Of Bound enter valid index")
       return;
    }
    this.size--;
    let current=this.head;
    let count=0;
    while(count<index-1){
        current=current.next;
        count++
    }
    
    let nextNode=current.next;
     current.next=nextNode.next;
     nextNode=null;
}


length(){
    console.log("the length of linked list is = " + this.size)
}
}
let ll=new sList()
ll.insertAtBegin(10)
ll.insertAtBegin(20)
ll.insertAtBegin(30)
ll.insertAtEnd(40)
ll.insertAtIndex(50,1)
//console.log(ll)
//ll.print()
//ll.length();
//ll.getData(1)
//ll.deleteAtStart()
ll.deleteAtIndex(5)
ll.print()



