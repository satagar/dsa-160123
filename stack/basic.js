class Stack {
    constructor(){
      this.data = [];
      this.top = 0;
    }
    
    push(data){
      this.data[this.top] = data;
      this.top++;
    }
    
    pop(){
      if(this.isEmpty()){
        throw new Error('Underflow!');
      }
      this.top--;
      let data = this.data[this.top];
      return data;
    }
    
    peek(){
      return this.data[this.top-1];
    }
    
    print(){
      for(let i = this.top - 1; i >= 0; i--){
        console.log(this.data[i]);
      }
    }
    
    isEmpty(){
      return this.top == 0;
    }
    
    insertElementAtBottom(data){
      if(this.top == 0){
        this.data[this.top] = data;
        this.top++;
        return;
      }
      this.top--;
      let temp = this.data[this.top];
      this.insertElementAtBottom(data);
      this.data[this.top] = temp;
      this.top++;
    }
    
    reverse(){
      if(this.top == 0){
        return;
      }
      this.top--;
      let temp = this.data[this.top];
      this.reverse();
      this.insertElementAtBottom(temp);
    }
  }
  
  var s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  s.push(4);
  // s.pop();
  // s.push(5);
  // s.push(6);
  // s.push(7);
  s.insertElementAtBottom(8);
  s.reverse();
  s.print();