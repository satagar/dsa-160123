class Queue{
    constructor(){
        this.data = [];
        this.front=0;
        this.rear=0;
    }
  enqueue(value){
    this.data[this.rear]=value;
    this.rear++
  }
  dequeue(){
    let f = this.data[this.front]
    this.front++;
    return f;
  }
  isEmpty(){
    //this is a index 
    return this.front == this.rear
  }
  peek(){
    //when the queue is empty return null
    if(this.isEmpty()){
        return null;
    }
    //then first index element return 
    return this.data[this.front]
  }
  size(){
    //back - front 
    return this.rear - this.front
  }
  //print function not required in this problem bcz of function its only use to print queue 
  print(){
    let i=this.front;
    while(this.data[i]!=null){
        console.log(this.data[i])
        i++;
    }
  }
}
function firstReptingchar(str){
    //create a map 
    let map=new Map();
    //create a new queue instance
    let q =new Queue();
    //iterate the for loop through the str.length 
    for(let i=0;i<str.length;i++){
    // check if map already has that value or char 
    if(map.has(str[i])){
    //initialize the q.size equal to count 
        let count = q.size();
    //iterate this condition till count is grater than 0. 
        while(count>0){
        //initialize the q.dequeue equal to current      
            let curr = q.dequeue();
        //if current is not equal to the repeating element.
            if(curr!= str[i]){
        //push current i the queue.
                q.enqueue(curr);
            }
            //decrement count 
            count--
        }
    }
    else{
        //if the element is occurring for the first time then we push the element in the queue
        q.enqueue(str[i]);
        //nd set the key as element nd value as 1 in the map
        map.set(str[i],1);
    }
    //is queue is not empty print q.peek or print -1.
    console.log(q.peek() || -1); 
    }
}
firstReptingchar("abab");
firstReptingchar("abacacb");