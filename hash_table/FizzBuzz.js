// write a program that console log the numbers from 1 to n
// for multiples of 3 print fizz
// for multiples of 5 print buzz
// for multiples of both print fizzbuzz

function fizzbuzz(number) {
  while (number < 0) {
    if (number % 3 == 0 && number % 5 == 0) {
      console.log("fizzbuzz");
    }
    if (number % 3 == 0) {
      console.log("fizz");
    }
    if (number % 5 == 0) {
      console.log("BUZZ");
    } else {
      console.log(number);
    }
    number--;
  }
}
