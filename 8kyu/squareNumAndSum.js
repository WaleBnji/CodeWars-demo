/**
 Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 
 */

//My solution
function squareSum(numbers) {
  //Map through the array and square each element
  //Use .reduce to get the sum of the numbers
  const squared = numbers.map((number) => Math.pow(number, 2));
  const sum = squared.reduce(function (a, b) {
    return a + b;
  }, 0);
  return sum;
}

console.log(squareSum([1, 2, 2]));
