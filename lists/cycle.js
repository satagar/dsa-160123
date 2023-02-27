function cycle(head){
	let slow = head;
  let fast = head;
  
  while(fast != null && fast.next != null){
  	fast = fast.next.next;
    slow = slow.next;
    
    if(fast == slow){
    	return true;
    }
  }
  
  return false;
}