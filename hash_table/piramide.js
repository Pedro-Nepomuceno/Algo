// write a function that accepts a positive number N
// the function should console.log a pyramide shape
// with N levels using the character #
// make sure the steps has space on the right side and left side

// "   #  "
// "  ##  "
// "#####"

function piramide(n) {
  const mid = Math.floor((2 * n - 1) / 2);
  for (let row = 1; row <= n; row++) {
    let line = "";
    for (let col = 1; col < 2 * n - 1; col++) {
      if (col >= mid - row && col <= mid + row) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}
