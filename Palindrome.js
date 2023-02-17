class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }

    push(element) {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }
    isEmpty(){
        return this.top == 0;
    }
    size(){
        return this.top;
    }

    pop(){

        if(this.isEmpty()){
            console.log("Underflow Case : Stack id Empty");
            return;
        }

        this.top = this.top-1;
        let rv = this.data[this.top]; 
        this.data[this.top] = 0;
        return rv;
    }
    peek(){
        if(this.isEmpty()){
            console.log("Underflow Case : Stack id Empty");
            return;
        }

        this.top = this.top-1;
        let rv = this.data[this.top]; //rv = rerturn value 
        this.top = this.top+1;
        return rv;
    }

    print(){
        let index = this.top -1;
        while(index >= 0){
            console.log(this.data[index])
            index--;
        }
    }
}

head = [1, 2, 3, 1, 2]

var isPalindrome = function(head) {
    
  if(head == null || head.next == null ) return true;

  var slow = head;
  var fast = head;

  while(fast.next != null && fast.next.next != null){
      slow = slow.next;
      fast = fast.next.next;
  }

  slow.next = reverseList(slow.next)
  slow = slow.next;
  while(slow != null ){
      if(head.val != slow.val) return false;
      head = head.next;
      slow = slow.next;
  }
  return true;
};

function reverseList (head) {
  var prev = null;
  var next = null;
  curr = head;
  while(curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }
  return prev;
}

console.log(isPalindrome(head));
