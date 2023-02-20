class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.size = null;
    }
    isEmpty() {
        return this.head;
    }
    InsertAtBegining(data) {
        let newnode = new Node(data);
        if (this.size == 0) {
            this.head = newnode;
        } else {
            newnode.next = this.head;
            this.head = newnode;
        }
        this.size++;
    }
    MakeCycle(index){
        if(this.size-1 < index){
            console.log('Please give correct index to make a cycle in Linked List');
        }else{
            let current = this.head;
            let postion = this.head;
            while(current.next!=null){
                if(index > 0){
                    postion = postion.next;
                    index--;
                }
                current = current.next;
            }

            current.next  = postion;
        }
    }
    isCycleExists() {
        let slow = this.head;
        let fast = this.head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if(slow == fast){
                return true;
            }
        }
        return false;
    }
}

let s = new SingleLinkedList();
s.InsertAtBegining(5);
s.InsertAtBegining(4);
s.InsertAtBegining(3);
s.InsertAtBegining(2);
s.InsertAtBegining(1);
s.InsertAtBegining(0);
//s.MakeCycle(2);
console.log(s.isCycleExists());
//s.printLinkedList();