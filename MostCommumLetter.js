// given a string, return the caracther that is most frequently used in the string

function FindMostCommum(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  for (const [char, value] of Object.entries(charMap)) {
    if (value > max) {
      max = value;
      maxChar = char;
    }
  }
  return maxChar;
}
