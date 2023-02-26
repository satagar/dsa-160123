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
  
  function balancedP(str){
    var stack = new Stack();
    
    for(let i = 0; i < str.length; i++){
      if(str[i] == '('){
        stack.push(str[i]);
      }
      else {
        let current = stack.pop();
        if(current != '('){
          return false;
        }
      }
    }
    if(!stack.isEmpty()){
      return false;
    }
    return true;
  }
  
  balancedP('((())())');