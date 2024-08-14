// write a function called same, which accepts 2 arrays.
// the function should return true if every value in the array has its corresponding value squared in the 2nd array
// the frequency of values must be the same.

function same(arr1, arr2) {
  if (arr1.length === arr2.lenght) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};
  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
  for (let key in obj1) {
    if (!(key ** 2 in obj2)) {
      return false;
    }
    if (obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }
  return true;
}

[2, 3, 5, 6];

let obj = { 2: 1, 3: 1, 5: 1, 6: 1 };
let obj2 = { 4: 1, 9: 1, 25: 1, 36: 1 };
