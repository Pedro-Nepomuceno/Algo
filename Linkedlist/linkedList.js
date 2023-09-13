// create new linkedList 

class Node {
    constructor(value){
        this.head = {
        value:value,
        next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

append(value){
    const newnode = {
    value:value,
    next: null
    }
    // instead of this.next point to null it will point to the new node;
    this.tail.next = newnode;
    // set the new node to be the new tail
    this.tail = newnode;
    this.length++;
    return this;
}

prepend(value){
const newnode = {
    value: value,
    next: null,
}
newnode.next = this.head;
this.head = newnode;
this.length++
return this;
}
printeList(value){
    let array = []
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode)
        currentNode = currentNode.next
    }
    return array;
}

} 