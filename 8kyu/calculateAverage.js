/**
 Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
 */
//My solution
function findAverage(array) {
  const sum = array.reduce((a, b) => {
    return a + b;
  }, 0);
  return sum / array.length;
}

console.log(findAverage([1, 2, 3, 4]));
