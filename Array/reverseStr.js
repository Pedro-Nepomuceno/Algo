// reverse the string
// in Javascript we can access items from a string as item from an array e.g str[i]


function reverseStr(str){
    return str.split('').reverse().join('');
}


// hello
function rvrStr (str) {
    let reverseStr = "";
    for(let char of str){
 reverseStr = char + reverseStr;
 //             h + "";
 //             e + h;
    }
    return reverseStr
}

// reduce method

function reduction (str){
    return Array.from(str).reduce((reverse, char) => reverse+char, "")
}