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
    MakeCycle(index) {
        if (this.size - 1 < index) {
            console.log('Please give correct index to make a cycle in Linked List');
        } else {
            let current = this.head;
            let postion = this.head;
            while (current.next != null) {
                if (index > 0) {
                    postion = postion.next;
                    index--;
                }
                current = current.next;
            }

            current.next = postion;
        }
    }
    findStartingNodeinCycle() {
        let slow = this.head;
        let fast = this.head;
        do {
            slow = slow.next;
            fast = fast.next.next;
        }while (fast != slow)
        slow = this.head;
        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    }
}

let s = new SingleLinkedList();
s.InsertAtBegining(5);
s.InsertAtBegining(4);
s.InsertAtBegining(3);
s.InsertAtBegining(2);
s.InsertAtBegining(1);
s.InsertAtBegining(0);
s.MakeCycle(2);
console.log(s.findStartingNodeinCycle());
// --------------------------------------------------------------------------------
let s2 = new SingleLinkedList();
s2.InsertAtBegining(9);
s2.InsertAtBegining(8);
s2.InsertAtBegining(7);
s2.InsertAtBegining(6);
s2.InsertAtBegining(5);
s2.InsertAtBegining(4);
s2.InsertAtBegining(3);
s2.InsertAtBegining(2);
s2.InsertAtBegining(1);
s2.MakeCycle(3);
console.log(s2.findStartingNodeinCycle());