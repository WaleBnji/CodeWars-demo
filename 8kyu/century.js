/**
 Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here
 */
//My solution
function century(year) {
  //Divide by 100
  //If a remainder exists, round up, if not return the answer
  const cent = year / 100;
  return cent % 1 === 0 ? cent : Math.ceil(cent);
}

console.log(century(1705));
