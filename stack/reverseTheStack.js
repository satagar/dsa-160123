class stack{
    constructor(){
        this.data=[]
        this.top=0
    }
    reverse(){
        if(this.top==0){
            return;
        }
        this.top--;
        let current =this.data[this.top]
        this.reverse()
        console.log(current)
        this.top++
    }
}
const Stack =new stack;
Stack.push(40);
Stack.push(30);
Stack.push(20);
Stack.push(10);
stack.reverse()