// assume you have an Array of commits [c1,c3,c4,c5] and you want to find out which commit was the bad one which causes all the following one to be bad
// you are given an API boolean isBadVersion() which will return whether a commit is bad.
// implement a function to find the first bad commit
// if target not found return - 1

function lookForTarget(arr, target) {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    let middle = Math.floor((first + last) / 2);
    if (middle == target) {
      return middle;
    }
    if (target > middle) {
      first = middle + 1;
    }
    if (target < middle) {
      last = middle - 1;
    } else {
      return -1;
    }
  }
}
// find in a sorted array the target number, if target not present return the nearest number
// example : [1,2,6,7,8] Target = 3   return 2

function lookForNearestNumber(arr, target) {
  let first = 0;
  let last = arr.length - 1;
  while (first <= last) {
    let middle = Math.floor((first + last) / 2);
    if (middle > target) {
      first = middle + 1;
    }
    if (middle < target) {
      last = middle - 1;
    }
  }
  if (target - arr[first] <= target - arr[last]) {
    return arr[first];
  } else {
    return arr[last];
  }
}
