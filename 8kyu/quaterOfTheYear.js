/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12
*/

//My solution
const quarterOf = (month) => {
  // Your code here
  //each statement checks the quater of the month based on the fact that a year contains 4 quaters
  const quarter = 3;
  if (month <= quarter) {
    return 1;
  } else if (month <= quarter * 2) {
    return 2;
  } else if (month <= quarter * 3) {
    return 3;
  } else {
    return 4;
  }
};

console.log(quarterOf(9));
