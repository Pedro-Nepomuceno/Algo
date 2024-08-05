// given a string return true if it is a palindrome
// palindrome are string that form the same word if it is reversed

function palindrome(str) {
  // first I need to iterate over the str and reverse it for comparisson
  // second I need to compare original str with reversed string
  // return true if str === reversedStr
  let reversedStr = "";

  for (const char of str) {
    reversedStr = char + reversedStr;
  }

  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
}
