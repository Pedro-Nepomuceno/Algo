// write a function that takes in a sentence and return the longest word in the sentence

function longerWord(str) {
  let words = str.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest) {
      longest = word;
    }
  }

  return longest;
}
// another solution with multiple words

function multipleWords(arr) {
  let count = 0;
  let max = [" "];
  let words = arr.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= count) {
      count = words[i].length;
      if (max[max.length - 1] < words[i]) {
        max = [];
        max.push(words[i]);
      } else {
        max = [...max, max[words[i]]];
      }
    }
  }
  return [...max];
}
