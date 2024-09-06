// find if a number is repeated in the array

function hasDuplicate(nums) {
  const map = {};
  for (const num of nums) {
    if (map[num]) {
      return true;
    }
    map[num] = (map[num] || 0) + 1;
  }
  return false;
}
