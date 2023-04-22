/**
 You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
 */

//My solution
function findNextSquare(sq) {
  //Check if the number is a perfect square
  //If it is then find the sq root
  //Find the square of the number next to sq root of the given number
  //if its not a perfect square then return -1;
  const n = Math.sqrt(sq);
  return Number.isInteger(n) ? Math.pow(n + 1, 2) : -1;
}

console.log(findNextSquare(625));
