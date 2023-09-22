// set a double linked list

class DoublelinkedList{
    constructor(value){
        this.head = {
            value:value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            valeu: value,
            next: null,
            prev: null,
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode;
        this.length++
        return this
    }
prepend(value){
    const newNode = {
        value:value,
        next:null,
        prev:null,
    }
    newNode.next = this.head;
    this.head.prev = newNode
    this.head = newNode;
    this.length++
    return this
}
//   [ 2 , 5 , 7 , 8 ]

insert(index,value){
    const newNode = {
    value:value,
    next:null,
    prev:null
    }
    const leader = this.traverseToIndex(index-1)
    const holdingPointer = leader.next;
    leader.next = newNode
    newNode.prev = leader
    newNode.next = holdingPointer
    holdingPointer.prev = newNode;

}

traverseToIndex(index){
let count = 0;
let currentNode = this.head

while (count !== index){
currentNode = currentNode.next
count++
}
return currentNode;
}

}