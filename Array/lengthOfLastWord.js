// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

function lengthLastWord(s) {
  let lastWord = [];
  let count = 0;
  for (let char = 0; i < s.length; i++) {
    if (!char[i] == "") {
      count + 1;
      lastWord.push(char[i]);
    } else if (char[i] == " " && char[i + 1] !== " ") {
      lastword = [];
      count = 0;
      lastWord.push(char[i + 1]);
    }
    return lastWord.length;
  }
}
