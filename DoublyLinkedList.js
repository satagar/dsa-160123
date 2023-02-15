
class node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class ddoublyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }
    insertAtBegin(data) {
        let newNode = new node(data)
        this.size++
        if (this.head == null) {
            this.head = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode;

    }

    insertAtEnd(data) {
        let newNode = new node(data)
        this.size++
        let curr = this.head
        while (curr.next != null) {
            curr = curr.next
        }
        curr.next = newNode;
        newNode.prev = curr;
    }

    insertAtIndex(data, idx) {
        let newNode = new node(data)
        this.size++
        let curr = this.head
        let temp = 0
        // if(idx==0){
        //     this.head=newNode;

        // }
        while (idx - 1 > 0) {
            curr = curr.next
            idx--

        }
        let nextNode = curr.next;
        newNode.next = nextNode;
        nextNode.prev = newNode;

        curr.next = newNode
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


    pritlist() {
        let curr = this.head;
        while (curr != null) {
            console.log(curr.data)
            curr = curr.next
        }
    }
}

const Dlist = new ddoublyLinkedList();
Dlist.insertAtBegin(10)
Dlist.insertAtBegin(20)
Dlist.insertAtEnd(30)
Dlist.insertAtIndex(50, 2)
Dlist.getDataAtIdx(0)
Dlist.pritlist();

