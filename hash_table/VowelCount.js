// write a function that returns the numbers of vowels used in a string

function countVowel(str) {
  // iterate over the string
  // check to see if iteration contains vowels
  // keep count of variable
  let newStr = str.lowerCase().replace(/[\W]/, "");
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let char of newStr) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }

  return count;
}
