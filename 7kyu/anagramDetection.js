/**
 An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
 */

//My solution
var isAnagram = function (test, original) {
  if (test.length !== original.length) {
    return false;
  }
  const tArr = test.toLowerCase().split('').sort();
  console.log(tArr);

  const oArr = original.toLowerCase().split('').sort();
  console.log(oArr);

  return JSON.stringify(tArr) === JSON.stringify(oArr) ? true : false;
};

console.log(isAnagram('Buckethead', 'DeathCubeK'));
