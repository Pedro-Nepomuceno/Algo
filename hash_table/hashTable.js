class HashTable{
    constructor(size){
        this.data  = new Array(size)
    }
    _hash(key){
        let hash = 0;
        for(let i = 0; i<key.length; i++){
        hash = (hash + key.charCodeAt(i) * i)% this.data.length
    }
    return hash
    }

    set(key,value){
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = []
        }
        this.data[address].push([key,value])
        return this.data

    }

    get(key){
        let address = this._hash(key);
let currentBucket = this.data[address];
for(let i = 0; i< currentBucket.length; i++){
    if(currentBucket[i][0] === key){
        return currentBucket[i][1]
    }
}
return undefined;

    }
}

const myHash = new HashTable(50)