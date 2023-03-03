class Dequeue {
constructor(){
    this.data =[];
    this.front=0;
    this.rear=0;
}
addBack(ele){
    this.data[this.rear] = ele;
    this.rear++;
}
isEmpty() {
    return this.front === this.rear;
  }
addFront(ele){
    if(this.isEmpty()){
    this.data[this.rear] = ele;
    this.rear ++
}
else if(this.front > 0){
    this.front--;
    this.data[this.front]=ele;
}
else{
    for(let i=this.rear;i>this.front;i--){
        this.data[i]=this.data[i-1];
    }
    this.data[this.front]=ele;
    this.rear++;
  }
 }
 removeFront(){
let j= this.data[this.front] ;              
this.data[this.front] = 0;               
this.front++;                           
return j;                                
 }

 removeRear(){
    if(this.isEmpty()){
        return
    }
    this.rear--
    let k=this.data[this.rear-1];
    this.data[this.rear - 1]=null;
    return k;
 }

print(){
    let i= this.front;
    while(this.data[i]!=null){
        console.log(this.data[i])
        i++
    }
}

}
const q = new Dequeue();
q.addFront(20);
q.addFront(40);
q.addFront(50);
q.addFront(70);
q.addBack(100);
q.removeFront();
q.removeRear();
q.print();