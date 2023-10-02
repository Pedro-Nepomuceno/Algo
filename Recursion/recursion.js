// reverse the string using recursion

function reverseString(str){
    if(str === 0) return  "";
    
    return str[str.length-1] + reverseString(slice(0,str.length-1))
}