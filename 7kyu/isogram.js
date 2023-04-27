/**
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
 */

//My solution
function isIsogram(str) {
  if (str === '') {
    return true;
  }
  const arr = str.split('').map((letter) => letter.toLowerCase());
  const unique = [...new Set(arr)];
  return arr.length === unique.length ? true : false;
}

console.log(isIsogram('aba'));
