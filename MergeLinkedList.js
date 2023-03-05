//Merge two Linked List A and B of size m and n.Merge in First linked list in alternate order
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


function MergeLinedList(s1, s2) {
    let head1 = s1.head;
    while (head1.next != null && s2.head != null) {
        
        let node1 = head1.next;
        let node2 = s2.head;
        s2.head = s2.head.next;

        head1.next = node2;
        node2.next = node1;

        head1 = head1.next.next;
        

    }
    if(s2.head !=null){
        head1.next = s2.head;
    }
    s2.head = null;
    s1.PrintLinkedList();
    s2.PrintLinkedList();
}
var s1 = new SingleLinkedList();
var s2 = new SingleLinkedList();
s1.InsertAtBegnining(3);
s1.InsertAtBegnining(2);
s1.InsertAtBegnining(1);
s2.InsertAtBegnining(8);
s2.InsertAtBegnining(7);
s2.InsertAtBegnining(6);
s2.InsertAtBegnining(5);
MergeLinedList(s1, s2);
