/* 
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/
//My solution
function getSum(a, b) {
  //check which is higher
  //create an empty array and start to add all the numbers into this new array including a and b
  //Sum all the numbers in this new array
  //If Same return a
  const s = [];
  if (a === b) {
    return a;
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      s.push(i);
    }
  } else {
    for (let i = a; i >= b; i--) {
      s.push(i);
    }
  }
  return s.reduce((a, b) => a + b, 0);
}
console.log(getSum(-1, 2));
