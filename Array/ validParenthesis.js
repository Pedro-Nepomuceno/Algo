// given an string containing just characters, determine if the input string is valid

const isValid = function (string) {
  const stack = [];
  const parens = "() {} [] ";
  let i = 0;

  while (i < string.length) {
    stack.push(string[i]);
    i++;

    let open = stack[stack.length - 2];
    let close = stack[stack.length - 1];
    let potentialCharacter = open + close;
    if (parens.includes(potentialCharacter)) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0;
};
