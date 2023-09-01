// reverse the string
// in Javascript we can access items from a string as item from an array e.g str[i]


function reverseStr(str){
    return str.split('').reverse().join('');
}

// method if input is a sentence
function anotherRvrs(str){
    // check for str or valid input
    if(!str || str.length < 2 || typeof str !== "string"){
        return "something went wrong"
    }
    let backwards = [];
    for(let i = str.length -1; i >= 0; i--){
    backwards.push(str[i])
    }

    return backwards.join("")
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