/**
 Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
 */

//My solution
function countBy(x, n) {
  let z = [];

  for (let i = x; i < n; i++) {
    if (i % x === 0) {
      z.push(i);
    }
  }

  return z;
}

console.log(countBy(2, 5));

// A mulitiple of a number is a number that divides the parent number without remainders
