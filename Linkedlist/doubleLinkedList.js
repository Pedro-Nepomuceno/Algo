// set a double linked list

class DoublelinkedList{
    constructor(value){
        this.head = {
            value:value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.next = null
    }
}