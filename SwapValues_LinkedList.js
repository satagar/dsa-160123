//Merge two Sorted linkedlist
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    InsertAtBegnining(data) {
        var node = new Node(data);
        if (this.size == 0) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    PrintLinkedList() {
        var curr = this.head;
        while (curr != null) {
            console.log(curr.data);
            curr = curr.next;
        }
    }

}

function SwapLinkedList(k){
    let s = new SingleLinkedList();
    s.InsertAtBegnining(10);
    s.InsertAtBegnining(9);
    s.InsertAtBegnining(8);
    s.InsertAtBegnining(7);
    s.InsertAtBegnining(6);
    s.InsertAtBegnining(5);
    s.InsertAtBegnining(4);
    s.InsertAtBegnining(3);
    s.InsertAtBegnining(2);
    s.InsertAtBegnining(1);
    console.log(`Print Actual Linked list`);
    s.PrintLinkedList();

    let current1 = null;
    let current2 = s.head;
    let current = s.head;
    let prev1 = null;
    let prev2 = null;
    while(k-1 > 0){
        prev1 = current;
        current = current.next;
        k--;
    }
    current1 = current;
    while(current.next !=null){
        prev2 = current2;
        current = current.next;
        current2 = current2.next;
    }
    let temp1 = current1.next;
    let temp2 = current2.next;
    prev1.next = current2;
    current2.next = temp1;
    prev2.next = current1;
    current1.next = temp2;
    console.log(`Print After Swap`);
    s.PrintLinkedList();
}

console.log(SwapLinkedList(3));


