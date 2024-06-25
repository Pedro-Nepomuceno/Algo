// given an array, find if array has pattern. either 2,4,6,8 || 2,9,27
// return -1 if no pattern

function mathPattern(arr) {
  let arith = new Set();
  let geo = new Set();

  for (let i = 1; i < arr.length; i++) {
    let numbers1 = arr[i] - arr[i - 1];
    arith.add(numbers1);
    let numbers2 = arr[i] / arr[i - 1];
    geo.add(numbers2);
  }
  if (arith.size === 1) {
    return "Arithmetic";
  }
  if (geo.size === 1) {
    return "Geometric";
  }
  return -1;
}
