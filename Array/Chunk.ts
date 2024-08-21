// given an array anc chunck size, divide the array into many subarrays

//chunck ([2,3,4,5],2) --> [[2,3],[ 4,5]]

interface arrProcessor {
  (numbers: number[], divisor: number): number[][];
}

const chunckArray: arrProcessor = (numbers, divisor) => {
  const newArray: number[][] = [];
  // iterate throught array
  // when number of iteration = divisor, push number into new array
  // save count
  // temporary array ? and then push this temporary array. pop the items after iteration = counter
  let index = 0;

  while (index < numbers.length) {
    newArray.push(numbers.slice(index, divisor));
    index += divisor;
  }

  return newArray;
};
interface ArrayProcessor {
  (numbers: number[], divisor: number): number[][];
}

const chunkArray: ArrayProcessor = (numbers, divisor) => {
  const result: number[][] = [];
  let tempChunk: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    tempChunk.push(numbers[i]);

    // When the temp chunk reaches the divisor size or it's the last element
    if (tempChunk.length === divisor || i === numbers.length - 1) {
      result.push([...tempChunk]);
      tempChunk = [];
    }
  }

  return result;
};

// Example usage:
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
