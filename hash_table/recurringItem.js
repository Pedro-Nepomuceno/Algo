// given an array, return the first value that is repeated in the given array


// are the values always integers ? 

function lookForRepetitveItem (array){
    let hashTable = {};

    for (char of array){
        if(!hashTable[char]){
            hashTable = hashTable[char] 
        }
        else return hashTable[char]
    }
}