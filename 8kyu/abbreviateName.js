/* 
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

function abbrevName(name) {
  //Turn name into an array
  const nameArr = name.split(' ');
  //Select the first letters of both words and turn to capital letters
  const firstNameChar = nameArr[0].charAt(0).toUpperCase();
  const secondNameChar = nameArr[1].charAt(0).toUpperCase();
  //Concatenate the two letters with a dot separating them
  return `${firstNameChar}.${secondNameChar}`;
}
