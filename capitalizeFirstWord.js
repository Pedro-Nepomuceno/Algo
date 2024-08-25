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

// another solution

function shorterVersion(str) {
  let words = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase + word.slice(1);
  });
}

function asd(str) {
  let newStr = str.split(" ");
  newStr.map((word) => {});
}

function visualizeSplit(str) {
  newStr = str.split(" ");
  console.log(newStr);
}

console.log(visualizeSplit("lets see this"));

visualizeSplit("lets see this");
