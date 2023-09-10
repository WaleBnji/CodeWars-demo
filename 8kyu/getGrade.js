/**
 Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
 */

//My solution
function getGrade(s1, s2, s3) {
  const avr = (s1 + s2 + s3) / 3;
  console.log(avr);

  return avr >= 90 && avr <= 100
    ? 'A'
    : avr >= 80 && avr < 90
    ? 'B'
    : avr >= 70 && avr < 80
    ? 'C'
    : avr >= 60 && avr < 70
    ? 'D'
    : avr >= 0 && avr < 60
    ? 'F'
    : null;
}

console.log(getGrade(95, 90, 93));
//
