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
insert(index,value){
    const newNode = {
        value: value,
        next: null,
    }
    const getLeader = this.findNodeIndex(index-1)
    let holdingPointer = getLeader.next;//4 
    getLeader.next = newNode;
    newNode.next = holdingPointer;
    this.length++
    return this
}

// 2 ---> 3 ---> 4 ---> 5 
                //2 
findNodeIndex(index){
    let counter = 0;
    let currentNode = this.head
    while(counter !== index){
currentNode = currentNode.next;
counter++
    }
    return currentNode
}

remove(index){
const leader = this.findNodeIndex(index-1)
const unwantedNode = leader.next;
leader.next = unwantedNode.next;
this.length--
return this.printeList
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