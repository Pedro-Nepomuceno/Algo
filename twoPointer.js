// using 2 pointers to solve palindrome
// a word that is the same if backwards

function twoPointers(str) {
  reversedStr = "";
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] == str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}
