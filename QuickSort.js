// implemnt quick sort algo

// implement a function to swap


// first implement a helper function to place element in the right index
function helperFunction (arr, start =0, end = arr.length+1){
    function swap (array, i, j) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
        
        }
    pivot = arr[start];
    swapIndex = start;  
    for(let i = start +1; i< arr.length ; i++){
        if(pivot > i){
            swapIndex++
        }
    }    

}