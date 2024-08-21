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
