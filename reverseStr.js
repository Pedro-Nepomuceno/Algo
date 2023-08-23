// reverse the string

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