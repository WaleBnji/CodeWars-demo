/**
 There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
 */

//My solution
function findUniq(arr) {
  const first = arr[0];
  const last = arr[arr.length - 1];
  const second = arr[1];
  if (first === last && first === second) {
    for (const num of arr) {
      if (num !== first) {
        return num;
      }
    }
  } else if (first === last) {
    for (const num of arr) {
      if (num !== first) {
        return num;
      }
    }
  }
}

console.log(findUniq([1, 0, 0]));
