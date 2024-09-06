// implement fibonnati with recursion

function fibo(n) {
  if (n < 2) {
    return n;
  }
  return fibo(n - 1) + fib(n - 2);
}
// fibonnaci without recursion

const anotherFibo = (num, array = [0, 1]) => {
  while (n > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
    n -= 1;
  }
  return array;
};

// what number is in the Nth position of the fibonnaci function

function findThePosition(position) {
  if (position <= 1) return position;
  const sequence = [0, 1];
  for (let i = 2; i < position; i++) {
    const [nextToLast, last] = sequence.slice(-2);
    sequence.push(nextToLast + last);
  }
  return sequence[position];
}
