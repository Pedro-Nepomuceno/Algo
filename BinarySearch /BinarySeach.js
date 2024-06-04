// assume you have an Array of commits [c1,c3,c4,c5] and you want to find out which commit was the bad one which causes all the following one to be bad
// you are given an API boolean isBadVersion() which will return whether a commit is bad.
// implement a function to find the first bad commit

function lookForTarget(arr, target) {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    let middle = Math.floor(first + last / 2);
    if (middle == target) {
      return middle;
    }
  }
}
