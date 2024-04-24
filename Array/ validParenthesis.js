// given an string containing just characters, determine if the input string is valid

const isValid = function (string) {
  const stack = [];
  const parens = "() {} []";
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
// another solution
// longer solution
const validParenthesis = (s) => {
  if (s == "") {
    return true;
  }
  if (s.length < 2) {
    return false;
  }
  const map = {
    "[": "]",
    "(": ")",
    "[": "]",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let br = [s[i]];
    if (map[br]) {
      stack.push(br);
    } else {
      let checkBracket = stack.pop();
      if (map[checkBracket] !== br) {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};
