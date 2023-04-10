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
  let smallestNum;
  if (list.length === 1) {
    smallestNum = list[0];
  } else {
    for (let i = 0; i < list.length; i++) {
      list[i] < list[i - 1]
        ? (smallestNum = list[i])
        : (smallestNum = list[i - 1]);
    }
  }

  return smallestNum;
};

var max = function (list) {
  let largestNum;
  if (list.length === 1) {
    largestNum = list[0];
  } else {
    for (let i = 0; i < list.length; i++) {
      list[i] > list[i - 1]
        ? (largestNum = list[i])
        : (largestNum = list[i - 1]);
    }
  }

  return largestNum;
};
const num = [5, 4, 3, 1000, -1000, 5000];

console.log(max([5]));
console.log(max(num));
