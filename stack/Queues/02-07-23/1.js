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
//   print(){
//     let i=this.front;
//     while(this.data[i]!=null){
//         console.log(this.data[i])
//         i++;
//     }
//   }
}
function slidingwindow(arr,k){
    const n =arr.length;
    const q = new Queue();
    const result = [];

    for(let i = 0; i<k ;i++){   

        if(!q.isEmpty() && arr[i] > q.peek() ){  
            
            q.dequeue();
        }
        q.enqueue(arr[i])
    }
    result.push(q.peek())

    for(let i=k; i < n; i++){

    if(arr[i-k] === q.peek()){

     q.dequeue();
   }
   let count = q.size();
   while(count > 0 ){
    const curr = q.dequeue()
    if(arr[i] < curr){
        q.enqueue(curr);
    }
    count--;
}
q.enqueue(arr[i]);
result.push(q.peek())
}
return result;
}
console.log(slidingwindow([1,3,-1,-3,5,3,6,7],3)) //output(3,3,4,5,5,5,6)-

