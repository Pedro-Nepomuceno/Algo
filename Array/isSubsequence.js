// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true

// information I have while iterationg
// value, index

function isSubsequence(s, t) {
  let i = 0;
  let j = 0;
  while (j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
    if (i === s.length) {
      return true;
    }
  }
  return i === s.length;
}

// function checkSubsequence(str, char) {
//     let i = 0;
//     let j = 0
//        while(i<str.length || j<char.length){
//            if(str[i] === char[j]){
//                i++
//                j++
//            }
//            else{
//                j++
//            }
//            if(i>str.length){
//                return true
//            }
//        }
//    return false
//      }
