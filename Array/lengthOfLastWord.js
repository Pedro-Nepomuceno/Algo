// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

function lengthLastWord(s) {
  let length = 0;
  let i = s.length - 1;

  // Skip trailing spaces
  while (i >= 0 && s[i] === " ") {
    i--;
  }

  // Count characters of the last word
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }

  return length;
}
