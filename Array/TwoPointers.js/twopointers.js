// given an unsorted array, move all the 0 to the end of the array

// traverse the array. every time I find a zero, switch places
function moveTheZero(array) {
  let right = 0;
  let left = 0;

  // [1 , 0 , 3 , 5 ]
  while (right < array.length) {
    if (array[right] !== 0) {
      [array[right], array[left]] = [array[left], array[right]];
      left++;
    }
    right++;
  }
  return array;
}
