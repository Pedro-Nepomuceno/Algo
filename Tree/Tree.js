// in the perfect binary tree. the number of nodes in the last section is equal to the sum of the number of nodes in all the other levels plus 1
// organizing this way we have half of the data in the bottom level. 
// this way we can avoid visiting every node
 
class Node {
constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
}
}

class BinaryTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newTree = new Node(value)
        if(this.root === null){
               this.root = newTree
        }
       else{
        let currentNode = this.root;
        while(true){
            if(value < currentNode){
                // left
                if(!currentNode.left){
                    this.currentNode.left = newTree;
                    return this
                }
                currentNode = currentNode.left
            }
            else{
                //right
                if(!currentNode.right){
                    currentNode.right = newTree
                    return this
                }
                currentNode = currentNode.right
            }
        }
       }
    }
}