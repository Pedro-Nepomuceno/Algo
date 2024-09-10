// return the left and right index of the max subarray sum
// assuming there is exaclty one result

function slidingWindow(nums) {
  maxSum = nums[0];
  curSum = 0;
  let start = 0;
  let end = 0;
  let tempStart = 0;
  for (let i = 0; i < nums.length; i++) {
    if (curSum === 0) {
      tempStart = i;
    }
    curSum += nums[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return [start, end];
}
