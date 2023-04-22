/**
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 */

//My solution
function countPositivesSumNegatives(input) {
  // your code here
  if (input === null) {
    return [];
  } else if (typeof input !== 'undefined' && input.length === 0) {
    return [];
  }
  const positive = input.filter((number) => number > 0);
  const negative = input.filter((number) => number < 0);
  const sumNegative = negative.reduce(function (a, b) {
    return a + b;
  });
  return [positive.length, sumNegative];
}
const jj = null;
console.log(countPositivesSumNegatives([]));
