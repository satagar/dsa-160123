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
function findIntersectionPoint(s1,s2){
    let current1 = s1.head;
    let current2 = s2.head;
    if(s1.size > s2.size){
        let diff = s1.size - s2.size;
        while(diff > 0){
            current1 = current1.next;
            diff--;
        }
    }else if(s1.size < s2.size){
        let diff = s2.size - s1.size;
        while(diff > 0){
            current2 = current2.next;
            diff--;
        }
    }
    while(current1.data != current2.data){
        current1 = current1.next;
        current2 = current2.next;
    }
    return current1;
}

let s1 = new SingleLinkedList();
s1.InsertAtBegining(5);
s1.InsertAtBegining(4);
s1.InsertAtBegining(8);
s1.InsertAtBegining(1);
s1.InsertAtBegining(4);
// --------------------------------------------------------------------------------
let s2 = new SingleLinkedList();
s2.InsertAtBegining(5);
s2.InsertAtBegining(4);
s2.InsertAtBegining(8);
s2.InsertAtBegining(1);
s2.InsertAtBegining(6);
s2.InsertAtBegining(5);
console.log(findIntersectionPoint(s1,s2));