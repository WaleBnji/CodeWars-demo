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
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i].toString();
    if (obj[element]) {
      obj[element] += 1;
    } else {
      obj[element] = 1;
    }
  }
for (const i in obj) {
    console.log(typeof i);
    if (obj[i] == 1) {
      return Number(i);
    }
  }
}

console.log(findUniq([0, 0, 0.55, 0, 0]));
