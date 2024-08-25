// Verify if 2 provided strings anagram to each other ?
// one stting is anagram of another if it uses the same characters in the same quantity

function mapCharacter(str) {
  let map = {};
  str = str.toLowerCase().replace(/[\W]/g, "");

  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }
  return map;
}

function checkAnagram(strA, strB) {
  let map1 = mapCharacter(strA);
  let map2 = mapCharacter(strB);

  // Check if the maps have the same number of keys
  if (Object.keys(map1).length !== Object.keys(map2).length) {
    return false;
  }

  for (let key in map1) {
    if (!(key in map2)) {
      return false;
    }
    if (map1[key] !== map2[key]) {
      return false;
    }
  }
  return true;
}
