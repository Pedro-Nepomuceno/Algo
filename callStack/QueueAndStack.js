// implement queue using stacks 

class QueueUsingStacks {
    constructor(){
        this.pushStack = [];
        this.popStack = [];
    }
    peek(){
        if(!this.popStack){
            while(this.pushStack.length){
                this.popStack.push(this.pushStack.pop())
            
            }
            return this.popStack[this.popStack.length-1]}

    }
    push(value){
    this.pushStack.push(value)

    }
    

    pop(){
if(!this.popStack){

    while(this.pushStack.length){
    this.popStack.push(this.pushStack.pop());

}
return this.popStack.pop();
}
    }
}