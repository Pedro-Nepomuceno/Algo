// giveen an integer array nums of length n you want to create an array ans of length 2n where ans[i] === nums[i] ans[i+n] == nums[i] for 0 <=i < n (o-indexed).

//specifically ans is the concatenation of two nums arrays
// return the array of ans
// Example 1:

//Input: nums = [1,2,1]
//Output: [1,2,1,1,2,1]

function repeatArray(nums) {
  let ans = new Array(nums.length * 2);

  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[i];
    ans[i + nums.length] = nums[i];
  }
  return ans;
}
