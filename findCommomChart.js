// given two arrays, return true if they share a character

// loop thru the array and create a object with keys that we already pass by; 

function checkSimilar(arr1,arr2) {
    map = {};

for (let char of arr1){
    if(!map[char]){
        map[char] = true;
    }
}
    for (let char of arr2){
        if(map[char]){
            return true
        }
    }
    return false
}