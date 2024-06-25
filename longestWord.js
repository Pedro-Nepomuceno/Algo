// write a function that takes in a sentence and return the longest word in the sentence

function longerWord(str) {
  let words = str.split("");
  let longest = "";

  for (let word of words) {
    if (word.length > longest) {
      longest = word;
    }
  }

  return longest;
}
