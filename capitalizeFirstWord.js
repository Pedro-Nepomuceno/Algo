// create a function that capitalize every first letter of a word

function capitalizeFirstLetter(str) {
  let arrWords = str.split(" ").map((word) => {
    let firstLetter = word.slice(0, 1);
    let restword = word.slice(1);
    firstLetter = firstLetter.toUpperCase();
    return `${firstLetter}${restword}`;
  });

  return arrWords.join(" ");
}
