/**
 Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
 */
//My solution
var min = function (list) {
  const smallestNum = Math.min(...list);
  return smallestNum;
};

var max = function (list) {
  const largestNum = Math.max(...list);

  return largestNum;
};
const num = [5, 4, 3, 1000, -1000, 5000];

console.log(max(num));
console.log(min(num));
