/**
 Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 */

//My solution
function reverseWords(str) {
  // Go for it
  const wordArr = str.split(' ');
  const reversedArr = wordArr.map((word) => word.split('').reverse().join(''));
  const final = reversedArr.toString().replace(/,/g, ' ');
  return final;
}

console.log(reverseWords('double  spaces'));
