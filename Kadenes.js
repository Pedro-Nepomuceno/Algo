// find a non empty subarray with the largest sum

// example [4, -1, 2, -7, 3, 4]

function findLargestSum(array) {
  let largerstSum = array[0];

  for (let i = 0; i < array.length; i++) {
    let currentSum = 0;
    for (let j = 1; j < array.length; j++) {
      currentSum = +array[j];
    }
    if (currentSum > largerstSum) {
      largerstSum = currentsum;
    }
  }
}
