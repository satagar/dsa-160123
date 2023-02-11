insertAtIdx(index, data) {
        if (index == 0) {
            this.insertAtStart(data);
            return;
        }
        if (index < 0 || index >= this.length) {
            console.log("Index out of bound exception");
            return;
        }

        let newNode = new Node(data);
        let prev = null;
        let current = this.head;

        let count = 0;
        while (count < index) {
            prev = current;
            current = current.next;
            count++;
        }

        prev.next = newNode;
        newNode.next = current;
        this.length++
    }
getElement(index) {

        if (index < 0 || index >= this.length) {
            console.log("Index out of bound exception");
            return;
        }

        let current = this.head;
        let count = 0;

        while( current !=null){
            if(count == index){
                console.log(current.data);
                break;
            }
            count++;
            current = current.next;
        }
    }

l1.insertAtIdx(2, 50);  
l1.printLinkedList();
console.log("--------------")

l1.getElement(1)
console.log("--------------")
